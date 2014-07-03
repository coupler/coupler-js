maria.ElementView.subclass(coupler, 'AppView', {
  constructor: function(model, controller) {
    maria.ElementView.apply(this, arguments);

    this._navigationView = new coupler.NavigationView(model);
    this.appendChild(this._navigationView);
    this._contentView = new coupler.ContentView(model);
    this.appendChild(this._contentView);
  }
});
