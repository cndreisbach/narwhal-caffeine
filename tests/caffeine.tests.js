var tests = exports;
var assert = require("assert");
var Caffeine = require("caffeine");

tests['test that functions can return their params'] = function () {
  var testFunc = function (alpha, beta, gamma) {};
  assert.deepEqual(['alpha', 'beta', 'gamma'], testFunc.params());
}

tests['test that functions can return their own contents'] = function () {
  var testFunc = function () {
    var a = 1;
    return a + 1;
  }
  assert.equal("var a = 1; return a + 1;", testFunc.contents().strip());
}

tests['test that objects can be extended'] = function () {
  var testObj = {};
  var mixin = { foo: function () { return true }, bar: false };
  
  Caffeine.extend(testObj, mixin);
  
  assert.ok(testObj.foo());
  assert.notEqual("undefined", typeof(testObj.bar));
}

tests['test that objects can be extended via Object.prototype'] = function () {
  var testObj = {};
  var mixin = { foo: function () { return true }, bar: false };
  
  testObj.extend(mixin);
  
  assert.ok(testObj.foo());
  assert.notEqual("undefined", typeof(testObj.bar));
}

tests['test that we can detect undefined Objects'] = function () {
  assert.ok(Caffeine.isUndefined(this.hullabaloo));
}

tests['test that objects know if they have a property'] = function () {
  var testObj = { foo: true };
  assert.ok(testObj.hasProp('foo'));
  assert.ok(!testObj.hasProp('bar'));
}

tests['test that objects know if they have a function'] = function () {
  var testObj = { foo: function () {}, bar: true };
  assert.ok(testObj.respondTo("foo"));
  assert.ok(!testObj.respondTo("bar"));
  assert.ok(!testObj.respondTo("baz"));
}

if (require.main == module.id)
    require('test/runner').run(tests);