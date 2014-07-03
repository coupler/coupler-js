(function() {
  var app = new coupler.AppModel();
  var view = new coupler.AppView(app);
  document.body.appendChild(view.build());
})();
