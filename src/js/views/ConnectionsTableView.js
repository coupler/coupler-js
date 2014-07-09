maria.SetView.subclass(coupler, "ConnectionsTableView", {
  properties: {
    createChildView: function(connection) {
      return new coupler.ConnectionView(connection);
    }
  }
});
