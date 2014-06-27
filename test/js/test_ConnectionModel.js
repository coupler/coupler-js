suite('ConnectionModel', function() {
  suite('#setAdapter', function() {
    test('should set adapter', function() {
      var connection = new coupler.ConnectionModel();
      connection.setAdapter('MySQL');
      assert.equal('MySQL', connection.getAdapter());
    });

    test('should dispatch change event', function() {
      var connection = new coupler.ConnectionModel();
      var callback = false;
      maria.on(connection, 'change', function() {
        callback = true;
      });
      connection.setAdapter('MySQL');
      assert(callback);
    });
  });
});
