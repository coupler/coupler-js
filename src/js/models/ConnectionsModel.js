maria.SetModel.subclass(coupler, 'ConnectionsModel', {
  properties: {
    toJSON: function() {
      return this.toArray();
    },
    load: function(data) {
      for (var i = 0, ilen = data.length; i < ilen; i++) {
        var connection = new coupler.ConnectionModel();
        connection.load(data[i]);
        this.add(connection);
      }
    }
  }
});
