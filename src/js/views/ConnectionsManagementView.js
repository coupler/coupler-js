maria.ElementView.subclass(coupler, 'ConnectionsManagementView', {
  constructor: function(model, controller) {
    maria.ElementView.apply(this, arguments);

    this._connectionsTableView = new coupler.ConnectionsTableView(model);
    this.appendChild(this._connectionsTableView);
    this._connectionsInputView = new coupler.ConnectionsInputView(model);
    this.appendChild(this._connectionsInputView);
  }
});
