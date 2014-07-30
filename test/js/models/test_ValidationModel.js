suite('ValidationModel', function() {
  suite('#setValid', function() {
    test('should set valid', function() {
      var validation = new coupler.ValidationModel();
      validation.setValid(true);
      assert(validation.getValid());
    });
  });

  suite('#getErrors', function() {
    test('should return ErrorsModel', function() {
      var validation = new coupler.ValidationModel();
      var errors = validation.getErrors();
      assert(errors instanceof coupler.ErrorsModel);
    });
  });
});
