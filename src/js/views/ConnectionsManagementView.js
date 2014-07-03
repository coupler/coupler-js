maria.ElementView.subclass(coupler, 'ConnectionsManagementView', {
  constructor: function(model, controller) {
    maria.ElementView.apply(this, arguments);

    this._connectionsView = new coupler.ConnectionsView(model);
    this.appendChild(this._connectionsView);
    this._connectionsInputView = new coupler.ConnectionsInputView(model);
    this.appendChild(this._connectionsInputView);
  }
});
