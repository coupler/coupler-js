suite('ErrorModel', function() {
  suite('#setSubject', function() {
    test('should set subject', function() {
      var error = new coupler.ErrorModel();
      error.setSubject('foo');
      assert.equal('foo', error.getSubject());
    });
  });

  suite('#setMessage', function() {
    test('should set message', function() {
      var error = new coupler.ErrorModel();
      error.setMessage('foo');
      assert.equal('foo', error.getMessage());
    });
  });
});
