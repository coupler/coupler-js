maria.Model.subclass(coupler, 'ConnectionModel', {
  properties: {
    getAdapter: function() {
      return this._adapter;
    },
    setAdapter: function(adapter) {
      if (this._adapter !== adapter) {
        this._adapter = adapter;
        this.dispatchEvent({type: 'change'});
      }
    }
  }
});
