suite('ValidationModel', function() {
  suite('#setValid', function() {
    test('should set valid', function() {
      var validation = new coupler.ValidationModel();
      validation.setValid(true);
      assert(validation.getValid());
    });
  });
});
