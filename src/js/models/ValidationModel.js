maria.Model.subclass(coupler, "ValidationModel", {
  properties: {
    getValid: function() {
      return this._valid;
    },
    setValid: function(value) {
      this._valid = value;
    }
  }
});
