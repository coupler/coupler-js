maria.ElementView.subclass(coupler, "ConnectionsInputView", {
  uiActions: {
    'click .submit': 'onSubmit'
  },
  properties: {
    getNameValue: function() {
      return this.find('input.name').value;
    },
    getAdapterValue: function() {
      return this.find('select.adapter').value;
    },
    getHostValue: function() {
      return this.find('input.host').value;
    },
    getPortValue: function() {
      return this.find('input.port').value;
    },
    getHostValue: function() {
      return this.find('input.host').value;
    },
    getUserValue: function() {
      return this.find('input.user').value;
    },
    getPasswordValue: function() {
      return this.find('input.password').value;
    }
  }
});
