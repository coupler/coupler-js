suite("ConnectionRowView", function() {
  suite("#build", function() {
    setup(function() {
      this.connection = new coupler.ConnectionModel();
      this.connection.setName('Foo');
      this.connection.setAdapter('MySQL');
      this.connection.setHost('localhost');
      this.connection.setPort(3306);
      this.connection.setUser('foo');
      this.connection.setPassword('bar');
      this.view = new coupler.ConnectionRowView(this.connection);
    });

    test('should show name', function() {
      assert.equal('Foo', this.view.find('.name').innerHTML);
    });

    test('should show adapter', function() {
      assert.equal('MySQL', this.view.find('.adapter').innerHTML);
    });

    test('should show host', function() {
      assert.equal('localhost', this.view.find('.host').innerHTML);
    });

    test('should show port', function() {
      assert.equal(3306, this.view.find('.port').innerHTML);
    });

    test('should show user', function() {
      assert.equal('foo', this.view.find('.user').innerHTML);
    });
  });
});
