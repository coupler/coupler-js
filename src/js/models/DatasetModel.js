maria.Model.subclass(coupler, "DatasetModel", {
  properties: {
    getName: function() {
      return this._name;
    },
    setName: function(name) {
      if (name !== this._name) {
        this._name = name;
        this.dispatchEvent({type: 'change'});
      }
    },
    getTableName: function() {
      return this._tableName;
    },
    setTableName: function(tableName) {
      if (tableName !== this._tableName) {
        this._tableName = tableName;
        this.dispatchEvent({type: 'change'});
      }
    },
    toJSON: function() {
      return({
        name: this._name,
        table_name: this._tableName
      });
    },
    load: function(data) {
      this._name = data.name;
      this._tableName = data.table_name;
    }
  }
});
