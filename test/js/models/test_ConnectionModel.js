suite('ConnectionModel', function() {
  suite('#setName', function() {
    test('should set name', function() {
      var connection = new coupler.ConnectionModel();
      connection.setName('Foo');
      assert.equal('Foo', connection.getName());
    });

    test('should dispatch change event', function() {
      var connection = new coupler.ConnectionModel();
      var callback = false;
      maria.on(connection, 'change', function() {
        callback = true;
      });
      connection.setName('Foo');
      assert(callback);
    });
  });

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

  suite('#getDatasets', function() {
    test('should return a DatasetsModel', function() {
      var connection = new coupler.ConnectionModel();
      var datasets = connection.getDatasets();
      assert(datasets instanceof coupler.DatasetsModel);
    });

    test('should return the same DatasetsModel each time', function() {
      var connection = new coupler.ConnectionModel();
      var datasets = connection.getDatasets();
      assert.strictEqual(datasets, connection.getDatasets());
    });
  });

  suite('#toJSON', function() {
    test('should return object', function() {
      var connection = new coupler.ConnectionModel();
      connection.setName('Foo');
      connection.setAdapter('MySQL');
      connection.setHost('localhost');
      connection.setPort(123);
      connection.setUser('foo');
      connection.setPassword('secret');

      var expected = {
        name: 'Foo',
        adapter: 'MySQL',
        host: 'localhost',
        port: 123,
        user: 'foo',
        password: 'secret',
        datasets: connection.getDatasets()
      };
      assert.deepEqual(expected, connection.toJSON());
    });
  });

  suite('#load', function() {
    test('should set values', function() {
      var connection = new coupler.ConnectionModel();
      connection.load({
        name: 'Foo',
        adapter: 'MySQL',
        host: 'localhost',
        port: 123,
        user: 'foo',
        password: 'secret',
        datasets: [{name: 'foo', table_name: 'foos'}]
      });
      assert.equal('Foo', connection.getName());
      assert.equal('MySQL', connection.getAdapter());
      assert.equal('localhost', connection.getHost());
      assert.equal(123, connection.getPort());
      assert.equal('foo', connection.getUser());
      assert.equal('secret', connection.getPassword());
      assert.equal(1, connection.getDatasets().size);
    });
  });
});
