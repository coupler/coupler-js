maria.SetView.subclass(coupler, "ConnectionsView", {
  properties: {
    createChildView: function(connection) {
      return new coupler.ConnectionView(connection);
    }
  }
});
