maria.Model.subclass(coupler, "ValidationModel", {
  properties: {
    getValid: function() {
      return this._valid;
    },
    setValid: function(value) {
      this._valid = value;
    },
    getErrors: function() {
      if (typeof(this._errors) == 'undefined') {
        this._errors = new coupler.ErrorsModel();
      }
      return this._errors;
    }
  }
});
