suite('AppView', function() {
  setup(function() {
    this.app = new coupler.AppModel();
    this.view = new coupler.AppView(this.app);
    this.view.build();
  });

  test('should have a NavigationView child', function() {
    var childView = this.view.childNodes[0];
    assert(childView instanceof coupler.NavigationView);
    assert.strictEqual(this.app, childView.getModel());
  });

  test('should have a ContentView child', function() {
    var childView = this.view.childNodes[1];
    assert(childView instanceof coupler.ContentView);
    assert.strictEqual(this.app, childView.getModel());
  });
});
