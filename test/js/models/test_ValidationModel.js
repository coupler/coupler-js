suite('ValidationModel', function() {
  suite('#getErrors', function() {
    test('should return ErrorsModel', function() {
      var validation = new coupler.ValidationModel();
      var errors = validation.getErrors();
      assert(errors instanceof coupler.ErrorsModel);
    });
  });

  suite('#isValid', function() {
    test('should return true if there are no errors', function() {
      var validation = new coupler.ValidationModel();
      assert(validation.isValid());
    });

    test('should return false if there are errors', function() {
      var validation = new coupler.ValidationModel();
      validation.getErrors().add(new coupler.ErrorModel());
      assert(!validation.isValid());
    });
  });

});
