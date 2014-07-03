maria.ElementView.subclass(coupler, 'ContentView', {
  constructor: function(model, controller) {
    maria.ElementView.apply(this, arguments);

    this._connectionsManagementView = new coupler.ConnectionsManagementView(model.getConnections());
    this.appendChild(this._connectionsManagementView);
  }
});
