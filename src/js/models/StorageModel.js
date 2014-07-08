maria.Model.subclass(coupler, "StorageModel", {
  properties: {
    _mode: 'local',
    _models: [],
    getMode: function() {
      return this._mode;
    },
    setMode: function(mode, arg) {
      this._mode = mode;
      switch (mode) {
        case 'object':
          this._object = arg;
          break;
      }
    },
    getObject: function() {
      return this._object;
    },
    add: function(model, arg) {
      this._models.push([model, arg]);
      maria.on(model, 'change', this);
    },
    handleEvent: function(evt) {
      if (this._mode == 'object') {
        var name = this._findArg(evt.target);

        if (typeof(name) !== 'undefined') {
          var data = this._serializeModel(evt.target);
          this._object[name] = data;
        }
      }
    },

    _findArg: function(model) {
      var arg;
      for (var i = 0, ilen = this._models.length; i < ilen; i++) {
        var arr = this._models[i];
        if (arr[0] === model) {
          arg = arr[1];
          break;
        }
      }
      return arg;
    },
    _serializeModel: function(model) {
      return JSON.stringify(model);
    }
  }
});
