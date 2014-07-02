maria.ElementView.subclass(coupler, "ConnectionView", {
  properties: {
    buildData: function() {
      var conn = this.getModel();
      this.find('.name').innerHTML = conn.getName();
      this.find('.adapter').innerHTML = conn.getAdapter();
      this.find('.host').innerHTML = conn.getHost();
      this.find('.port').innerHTML = conn.getPort();
      this.find('.user').innerHTML = conn.getUser();
    }
  }
});
