suite('ConnectionsManagementView', function() {
  setup(function() {
    this.connections = new coupler.ConnectionsModel();
    this.view = new coupler.ConnectionsManagementView(this.connections);
  });

  test('should have ConnectionsTableView child', function() {
    assert(this.view.childNodes[0] instanceof coupler.ConnectionsTableView);
  });

  test('should have ConnectionsInputView child', function() {
    assert(this.view.childNodes[1] instanceof coupler.ConnectionsInputView);
  });
});
