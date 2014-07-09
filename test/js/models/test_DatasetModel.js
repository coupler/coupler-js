suite('DatasetModel', function() {
  suite('#setName', function() {
    test('should set name', function() {
      var dataset = new coupler.DatasetModel();
      dataset.setName('foo');
      assert.equal('foo', dataset.getName());
    });

    test('should dispatch change event', function() {
      var dataset = new coupler.DatasetModel();
      var called = false;
      maria.on(dataset, 'change', function() {
        called = true;
      });
      dataset.setName('foo');
      assert(called);
    });
  });

  suite('#setTableName', function() {
    test('should set tableName', function() {
      var dataset = new coupler.DatasetModel();
      dataset.setTableName('foo');
      assert.equal('foo', dataset.getTableName());
    });

    test('should dispatch change event', function() {
      var dataset = new coupler.DatasetModel();
      var called = false;
      maria.on(dataset, 'change', function() {
        called = true;
      });
      dataset.setTableName('foo');
      assert(called);
    });
  });

  suite('#toJSON', function() {
    test('should return object', function() {
      var dataset = new coupler.DatasetModel();
      dataset.setName('foo');
      dataset.setTableName('foos');
      var expected = {name: 'foo', table_name: 'foos'};
      assert.deepEqual(expected, dataset.toJSON());
    });
  });

  suite('#load', function() {
    test('should assign values', function() {
      var dataset = new coupler.DatasetModel();
      dataset.load({name: 'foo', table_name: 'foos'});
      assert.equal('foo', dataset.getName());
      assert.equal('foos', dataset.getTableName());
    });
  });
});
