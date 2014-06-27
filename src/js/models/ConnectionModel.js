maria.Model.subclass(coupler, 'ConnectionModel', {
  properties: {
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
    }
  }
});
