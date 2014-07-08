suite('AppModel', function() {
  setup(function() {
    this.app = new coupler.AppModel();
  });

  suite('#setMode', function() {
    test('should set mode', function() {
      this.app.setMode('foo');
      assert.equal('foo', this.app.getMode());
    });

    test('should dispatch change event', function() {
      var called = false;
      maria.on(this.app, 'change', function() {
        called = true;
      });
      this.app.setMode('foo');
      assert(called);
    });
  });

  suite('#getConnections', function() {
    test('should create connections model on first use', function() {
      var connections = this.app.getConnections();
      assert(connections instanceof coupler.ConnectionsModel);
    });
  });

  suite("#toJSON", function() {
    test('should return object', function() {
      this.app.setMode('foo');
      var expected = {
        mode: 'foo',
        connections: this.app.getConnections()
      };
      assert.deepEqual(expected, this.app.toJSON());
    });
  });

  suite("#load", function() {
    test('should set values', function() {
      this.app.load({
        mode: 'foo',
        connections: [{
          name: 'Foo',
          adapter: 'MySQL',
          host: 'localhost',
          port: 123,
          user: 'foo',
          password: 'secret'
        }]
      });
      assert.equal('foo', this.app.getMode());
      assert.equal(1, this.app.getConnections().size);
    });
  });
});
