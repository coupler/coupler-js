maria.Model.subclass(coupler, 'AppModel', {
  properties: {
    getMode: function() {
      return this._mode;
    },
    setMode: function(mode) {
      if (this._mode !== mode) {
        this._mode = mode;
        this.dispatchEvent({type: 'change'});
      }
    },
    getConnections: function() {
      if (typeof(this._connections) == 'undefined') {
        this._connections = new coupler.ConnectionsModel();
      }
      return this._connections;
    }
  }
});
