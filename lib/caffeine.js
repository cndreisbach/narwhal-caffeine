var Caffeine = require("caffeine/core");

Caffeine.extend(exports, Caffeine);
Caffeine.extend(Object.prototype, require("caffeine/object"));
Caffeine.extend(Function.prototype, require("caffeine/function"));
Caffeine.extend(String.prototype, require("caffeine/string"));