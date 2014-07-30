maria.Model.subclass(coupler, "ValidationModel", {
  properties: {
    getErrors: function() {
      if (typeof(this._errors) == 'undefined') {
        this._errors = new coupler.ErrorsModel();
      }
      return this._errors;
    },
    isValid: function() {
      return this.getErrors().size == 0;
    },
  }
});
