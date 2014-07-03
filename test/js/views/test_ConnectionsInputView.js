suite("ConnectionsInputView", function() {
  setup(function() {
    this.connections = new coupler.ConnectionsModel();
    this.view = new coupler.ConnectionsInputView(this.connections);
  });

  suite("#getNameValue", function() {
    test('should get name value', function() {
      this.view.find('input.name').value = 'Foo';
      assert.equal('Foo', this.view.getNameValue());
    });
  });

  suite("#getAdapterValue", function() {
    test('should get adapter value', function() {
      this.view.find('select.adapter').value = 'MySQL';
      assert.equal('MySQL', this.view.getAdapterValue());
    });
  });

  suite("#getHostValue", function() {
    test('should get host value', function() {
      this.view.find('input.host').value = 'localhost';
      assert.equal('localhost', this.view.getHostValue());
    });
  });

  suite("#getPortValue", function() {
    test('should get port value', function() {
      this.view.find('input.port').value = '123';
      assert.strictEqual('123', this.view.getPortValue());
    });
  });

  suite("#getUserValue", function() {
    test('should get user value', function() {
      this.view.find('input.user').value = 'foo';
      assert.equal('foo', this.view.getUserValue());
    });
  });

  suite("#getPasswordValue", function() {
    test('should get password value', function() {
      this.view.find('input.password').value = 'bar';
      assert.equal('bar', this.view.getPasswordValue());
    });
  });
});
