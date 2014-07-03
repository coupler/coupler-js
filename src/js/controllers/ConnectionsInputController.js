maria.Controller.subclass(coupler, 'ConnectionsInputController', {
  properties: {
    onSubmit: function(evt) {
      var view = this.getView();
      var connection = new coupler.ConnectionModel();
      connection.setName(view.getNameValue());
      connection.setAdapter(view.getAdapterValue());
      connection.setHost(view.getHostValue());
      connection.setUser(view.getUserValue());
      connection.setPassword(view.getPasswordValue());

      var port = parseInt(view.getPortValue());
      if (port > 0) {
        connection.setPort(port);
      }

      this.getModel().add(connection);
    }
  }
});
