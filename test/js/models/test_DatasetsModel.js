suite('DatasetsModel', function() {
  suite('#toJSON', function() {
    test('should return array', function() {
      var dataset = new coupler.DatasetModel();
      dataset.setName('foo');
      dataset.setTableName('foos');
      var datasets = new coupler.DatasetsModel();
      datasets.add(dataset);
      assert.deepEqual([dataset], datasets.toJSON());
    });
  });

  suite('#load', function() {
    test('should create datasets', function() {
      var datasets = new coupler.DatasetsModel();
      datasets.load([{name: 'foo', table_name: 'foos'}]);
      assert.equal(1, datasets.size);
    });
  });
});
