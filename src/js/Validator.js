coupler.Validator = function() {
  this._rules = [];
};

coupler.Validator.subclass = function(namespace, name, options) {
  maria.subclass.call(this, namespace, name, options);
};

coupler.Validator.prototype.validatesPresence = function(attributeName) {
  this._rules.push(['_presence', attributeName]);
};

coupler.Validator.prototype.validatesUniqueness = function(attributeName) {
  this._rules.push(['_uniqueness', attributeName]);
};

coupler.Validator.prototype.validate = function(model, setModel) {
  var validation = new coupler.ValidationModel();
  var errors = validation.getErrors();

  for (var i = 0, ilen = this._rules.length; i < ilen; i++) {
    var rule = this._rules[i];
    this[rule[0]].call(this, model, setModel, rule[1], errors);
  }

  return validation;
};

coupler.Validator.prototype._getValue = function(model, attributeName) {
  var getter = 'get' + attributeName.replace(/(^|_)(.)/g, function(m, p1, p2) { return p2.toUpperCase(); });
  return model[getter].call(model);
};

coupler.Validator.prototype._addError = function(subject, message, errors) {
  var error = new coupler.ErrorModel();
  error.setSubject(subject);
  error.setMessage(message);
  errors.add(error);
};

coupler.Validator.prototype._presence = function(model, setModel, attributeName, errors) {
  var value = this._getValue(model, attributeName);
  if (value === undefined || value === null || value === '') {
    this._addError(attributeName, 'is required', errors);
  }
};

coupler.Validator.prototype._uniqueness = function(model, setModel, attributeName, errors) {
  var value = this._getValue(model, attributeName);
  var self = this;
  var found = setModel.some(function(otherModel) {
    if (model !== otherModel) {
      var otherValue = self._getValue(otherModel, attributeName);
      return value === otherValue;
    }
    return false;
  });
  if (found) {
    this._addError(attributeName, 'is already taken', errors);
  }
};
