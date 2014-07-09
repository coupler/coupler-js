maria.Model.subclass(coupler, 'ConnectionModel', {
  properties: {
    getName: function() {
      return this._name;
    },
    setName: function(name) {
      if (this._name !== name) {
        this._name = name;
        this.dispatchEvent({type: 'change'});
      }
    },
    getAdapter: function() {
      return this._adapter;
    },
    setAdapter: function(adapter) {
      if (this._adapter !== adapter) {
        this._adapter = adapter;
        this.dispatchEvent({type: 'change'});
      }
    },
    getUser: function() {
      return this._user;
    },
    setUser: function(user) {
      if (this._user !== user) {
        this._user = user;
        this.dispatchEvent({type: 'change'});
      }
    },
    getPassword: function() {
      return this._password;
    },
    setPassword: function(password) {
      if (this._password !== password) {
        this._password = password;
        this.dispatchEvent({type: 'change'});
      }
    },
    getHost: function() {
      return this._host;
    },
    setHost: function(host) {
      if (this._host !== host) {
        this._host = host;
        this.dispatchEvent({type: 'change'});
      }
    },
    getPort: function() {
      return this._port;
    },
    setPort: function(port) {
      if (this._port !== port) {
        this._port = port;
        this.dispatchEvent({type: 'change'});
      }
    },
    getDatasets: function() {
      if (typeof(this._datasets) == 'undefined') {
        this._datasets = new coupler.DatasetsModel();
      }
      return this._datasets;
    },
    toJSON: function() {
      return({
        name: this._name,
        adapter: this._adapter,
        host: this._host,
        port: this._port,
        user: this._user,
        password: this._password,
        datasets: this.getDatasets()
      });
    },
    load: function(data) {
      this._name = data.name;
      this._adapter = data.adapter;
      this._host = data.host;
      this._port = data.port;
      this._user = data.user;
      this._password = data.password;
      this.getDatasets().load(data.datasets);
    }
  }
});
