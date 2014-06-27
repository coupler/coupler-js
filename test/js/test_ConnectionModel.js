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

  suite('#setUser', function() {
    test('should set user', function() {
      var connection = new coupler.ConnectionModel();
      connection.setUser('foo');
      assert.equal('foo', connection.getUser());
    });

    test('should dispatch change event', function() {
      var connection = new coupler.ConnectionModel();
      var callback = false;
      maria.on(connection, 'change', function() {
        callback = true;
      });
      connection.setUser('foo');
      assert(callback);
    });
  });

  suite('#setPassword', function() {
    test('should set password', function() {
      var connection = new coupler.ConnectionModel();
      connection.setPassword('foo');
      assert.equal('foo', connection.getPassword());
    });

    test('should dispatch change event', function() {
      var connection = new coupler.ConnectionModel();
      var callback = false;
      maria.on(connection, 'change', function() {
        callback = true;
      });
      connection.setPassword('foo');
      assert(callback);
    });
  });

  suite('#setHost', function() {
    test('should set host', function() {
      var connection = new coupler.ConnectionModel();
      connection.setHost('foo');
      assert.equal('foo', connection.getHost());
    });

    test('should dispatch change event', function() {
      var connection = new coupler.ConnectionModel();
      var callback = false;
      maria.on(connection, 'change', function() {
        callback = true;
      });
      connection.setHost('foo');
      assert(callback);
    });
  });

  suite('#setPort', function() {
    test('should set port', function() {
      var connection = new coupler.ConnectionModel();
      connection.setPort('foo');
      assert.equal('foo', connection.getPort());
    });

    test('should dispatch change event', function() {
      var connection = new coupler.ConnectionModel();
      var callback = false;
      maria.on(connection, 'change', function() {
        callback = true;
      });
      connection.setPort('foo');
      assert(callback);
    });
  });
});
