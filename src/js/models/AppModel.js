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
    }
  }
});
