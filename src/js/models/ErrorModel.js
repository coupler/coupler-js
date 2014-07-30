maria.Model.subclass(coupler, "ErrorModel", {
  properties: {
    getSubject: function() {
      return this._subject;
    },
    setSubject: function(subject) {
      this._subject = subject;
    },
    getMessage: function() {
      return this._message;
    },
    setMessage: function(message) {
      this._message = message;
    }
  }
});
