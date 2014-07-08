(function() {
  var storage = new coupler.StorageModel();
  storage.setMode('object', window.localStorage);

  var app = new coupler.AppModel();
  storage.add(app, 'app');

  var view = new coupler.AppView(app);
  document.body.appendChild(view.build());
})();
