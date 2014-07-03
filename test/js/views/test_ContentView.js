suite('ContentView', function() {
  setup(function() {
    this.app = new coupler.AppModel();
    this.view = new coupler.ContentView(this.app);
  });

  test('should have ConnectionsManagementView child', function() {
    var childView = this.view.childNodes[0];
    assert(childView instanceof coupler.ConnectionsManagementView);
    assert.strictEqual(this.app.getConnections(), childView.getModel());
  });
});
