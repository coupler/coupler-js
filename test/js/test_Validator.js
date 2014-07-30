suite('Validator', function() {
  setup(function() {
    this.validator = new coupler.Validator();
  });

  suite('#validatesPresence', function() {
    setup(function() {
      this.validator.validatesPresence('name');
      this.model = {
        getName: function() {
          return this.name;
        }
      };
    });

    test('should create error when value is empty', function() {
      this.model.name = '';
      var validation = this.validator.validate(this.model);
      assert.strictEqual(false, validation.isValid());
    });

    test('should create error when value is undefined', function() {
      this.model.name = undefined;
      var validation = this.validator.validate(this.model);
      assert.strictEqual(false, validation.isValid());
    });

    test('should create error when value is null', function() {
      this.model.name = null;
      var validation = this.validator.validate(this.model);
      assert.strictEqual(false, validation.isValid());
    });
  });

  suite('#validatesUniqueness', function() {
    setup(function() {
      var self = this;
      this.validator.validatesUniqueness('name');
      this.model = {
        getName: function() {
          return this.name;
        }
      };
      this.otherModel = {
        getName: function() {
          return this.name;
        }
      };
      this.setModel = {
        some: function(callback) {
          return this.models.some(callback);
        }
      };
    });

    test('should create error when value is not unique', function() {
      this.model.name = 'foo';
      this.otherModel.name = 'foo';
      this.setModel.models = [this.otherModel];
      var validation = this.validator.validate(this.model, this.setModel);
      assert.strictEqual(false, validation.isValid());
    });

    test('should not create error when model is in set and value is unique', function() {
      this.model.name = 'foo';
      this.otherModel.name = 'bar';
      this.setModel.models = [this.model, this.otherModel];
      var validation = this.validator.validate(this.model, this.setModel);
      assert.strictEqual(true, validation.isValid());
    });
  });
});
