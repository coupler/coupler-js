suite("ConnectionsView", function() {
  suite('#build', function() {
    test('should add ConnectionView children', function() {
      var connection = new coupler.ConnectionModel();
      var connections = new coupler.ConnectionsModel();
      connections.add(connection);
      var view = new coupler.ConnectionsView(connections);
      view.build();
      assert.equal(1, view.childNodes.length);
    });
  });
});
