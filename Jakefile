var Jake = require("jake");

Jake.task("default", ["test"]);

Jake.task('test', function () {
  var tests = require("./tests/caffeine.tests.js");
  require('test/runner').run(tests);
});