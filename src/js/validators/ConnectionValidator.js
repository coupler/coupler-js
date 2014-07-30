coupler.Validator.subclass(coupler, 'ConnectionValidator', {
  constructor: function() {
    coupler.Validator.apply(this, arguments);
    this.validatesPresence('name');
    this.validatesUniqueness('name');
    this.validatesPresence('adapter');
    this.validatesPresence('host');
    this.validatesPresence('port');
  }
});
