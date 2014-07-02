suite('AppModel', function() {
  suite('#setMode', function() {
    test('should set mode', function() {
      var app = new coupler.AppModel();
      app.setMode('foo');
      assert.equal('foo', app.getMode());
    });

    test('should dispatch change event', function() {
      var app = new coupler.AppModel();
      var called = false;
      maria.on(app, 'change', function() {
        called = true;
      });
      app.setMode('foo');
      assert(called);
    });
  });
});
