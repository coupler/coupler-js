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
      this.load(model, arg);
    },
    remove: function(model) {
      var index = this._modelIndex(model);
      if (index >= 0) {
        maria.off(model, 'change', this);
        this._models.splice(index, 1);
      }
    },
    load: function(model, arg) {
      if (this._mode == 'object' && arg in this._object) {
        var data = JSON.parse(this._object[arg]);
        model.load(data);
      }
    },
    handleEvent: function(evt) {
      var model = evt.currentTarget;
      if (this._mode == 'object') {
        var name = this._modelArg(model);

        if (typeof(name) !== 'undefined') {
          var data = this._serializeModel(model);
          this._object[name] = data;
        }
      }
    },

    _modelIndex: function(model) {
      var index = -1;
      for (var i = 0, ilen = this._models.length; i < ilen; i++) {
        var arr = this._models[i];
        if (arr[0] === model) {
          index = i;
          break;
        }
      }
      return index;
    },
    _modelArg: function(model) {
      var arg;
      var index = this._modelIndex(model);
      if (index >= 0) {
        arg = this._models[index][1];
      }
      return arg;
    },
    _serializeModel: function(model) {
      return JSON.stringify(model);
    }
  }
});
