suite('ConnectionValidator', function() {
  suite('#validate', function() {
    setup(function() {
      this.model = new coupler.ConnectionModel();
      this.model.setName('Foo');
      this.model.setAdapter('MySQL');
      this.model.setHost('localhost');
      this.model.setPort(3306);
      this.setModel = new coupler.ConnectionsModel();

      this.validator = new coupler.ConnectionValidator();
    });

    test('should validate presence of name', function() {
      this.model.setName('');
      var result = this.validator.validate(this.model, this.setModel);
      assert(!result.isValid());
    });

    test('should validate uniqueness of name', function() {
      var otherModel = new coupler.ConnectionModel();
      otherModel.setName('Foo');
      this.setModel.add(otherModel);

      var result = this.validator.validate(this.model, this.setModel);
      assert(!result.isValid());
    });

    test('should validate presence of adapter', function() {
      this.model.setAdapter('');
      var result = this.validator.validate(this.model, this.setModel);
      assert(!result.isValid());
    });

    test('should validate presence of host', function() {
      this.model.setHost('');
      var result = this.validator.validate(this.model, this.setModel);
      assert(!result.isValid());
    });

    test('should validate presence of port', function() {
      this.model.setPort(null);
      var result = this.validator.validate(this.model, this.setModel);
      assert(!result.isValid());
    });
  });
});
