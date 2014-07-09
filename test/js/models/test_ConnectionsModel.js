suite('ConnectionsModel', function() {
  suite('#toJSON', function() {
    test('should return array', function() {
      var connection = new coupler.ConnectionModel();
      var connections = new coupler.ConnectionsModel();
      connections.add(connection)
      assert.deepEqual([connection], connections.toJSON());
    });
  });

  suite('#load', function() {
    test('should create connections', function() {
      var connections = new coupler.ConnectionsModel();
      connections.load([{
        name: 'Foo',
        adapter: 'MySQL',
        host: 'localhost',
        port: 123,
        user: 'foo',
        password: 'secret',
        datasets: [{name: 'foo', table_name: 'foos'}]
      }]);
      assert.equal(1, connections.size);
    });
  });
});
