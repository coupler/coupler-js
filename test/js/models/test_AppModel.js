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
});
