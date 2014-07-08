suite('StorageModel', function() {
  suite('#setMode', function() {
    test('should set local mode', function() {
      var storage = new coupler.StorageModel();
      var object = {};
      storage.setMode('object', object);
      assert.equal('object', storage.getMode());
      assert.strictEqual(object, storage.getObject());
    });
  });

  suite('local mode', function() {
    setup(function() {
      this.storage = new coupler.StorageModel();
      this.object = {};
      this.storage.setMode('object', this.object);
    });

    suite('#add', function() {
      test('should save JSON representation on change', function() {
        var model = new maria.Model();
        model.toJSON = function() {
          return {"foo":"bar"};
        };
        this.storage.add(model, 'foo');
        model.dispatchEvent({type: 'change'});
        assert.equal('{"foo":"bar"}', this.object['foo']);
      });
    });

    suite('#remove', function() {
      test('should not save JSON representation on change', function() {
        var model = new maria.Model();
        model.toJSON = function() {
          return {"foo":"bar"};
        };
        this.storage.add(model, 'foo');
        this.storage.remove(model);
        model.dispatchEvent({type: 'change'});
        assert(typeof(this.object['foo']) == 'undefined');
      });
    });

    suite('#load', function() {
      test('should unserialize JSON and load into model', function() {
        var model = new maria.Model();
        model.load = function(data) {
          this.data = data;
        };
        this.object['foo'] = '{"foo":"bar"}';
        this.storage.load(model, 'foo');
        assert.deepEqual({"foo":"bar"}, model.data);
      });
    });
  });
});
