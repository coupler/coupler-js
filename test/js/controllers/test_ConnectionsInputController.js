suite("ConnectionsInputController", function() {
  setup(function() {
    this.connections = new coupler.ConnectionsModel();
    this.controller = new coupler.ConnectionsInputController();
    this.view = new coupler.ConnectionsInputView(this.connections, this.controller);
  });

  suite("#onSubmit", function() {
    test('should create a new connection and add it to the set', function() {
      this.view.find('input.name').value = 'Foo';
      this.view.find('select.adapter').value = 'MySQL';
      this.view.find('input.host').value = 'localhost';
      this.view.find('input.port').value = '123';
      this.view.find('input.user').value = 'foo';
      this.view.find('input.password').value = 'bar';

      this.controller.onSubmit();

      assert.equal(1, this.connections.size);
      var connection = this.connections.toArray()[0];
      assert.equal('Foo', connection.getName());
      assert.equal('MySQL', connection.getAdapter());
      assert.equal('localhost', connection.getHost());
      assert.equal(123, connection.getPort());
      assert.equal('foo', connection.getUser());
      assert.equal('bar', connection.getPassword());
    });

    test('should reset the form', function() {
      sinon.stub(this.view, 'reset');
      this.controller.onSubmit();
      assert(this.view.reset.called);
    });
  });
});
