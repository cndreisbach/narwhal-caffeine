var Caffeine = require("./core")

exports.beget = function () {
  return Caffeine.create(this);
}

exports.extend = function (props) {
  Caffeine.extend(this, props);
};

exports.hasProp = function (propname) {
  return !Caffeine.isUndefined(this[propname]);
}

exports.respondTo = function (fnname) {
  return this.hasProp(fnname) && Caffeine.isFunction(this[fnname]);
}