exports.extend = function (obj, props) {
  Object.getOwnPropertyNames(props).forEach(function (prop) {
    var descriptor = Object.getOwnPropertyDescriptor(props, prop);
    descriptor.enumerable = false;
    Object.defineProperty(obj, prop, descriptor);
  });
};

exports.isUndefined = function (obj) {
  return (typeof(obj) === "undefined");
}

exports.isFunction = function (obj) {
  return (typeof(obj) === "function");
}