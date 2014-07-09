maria.SetModel.subclass(coupler, "DatasetsModel", {
  properties: {
    toJSON: function() {
      return this.toArray();
    },
    load: function(data) {
      for (var i = 0, ilen = data.length; i < ilen; i++) {
        var dataset = new coupler.DatasetModel();
        dataset.load(data[i]);
        this.add(dataset);
      }
    }
  }
});
