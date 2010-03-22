Caffeine for Narwhal
--------------------

Caffeine is a utility library that adds methods helpful methods I'm used to being able to have. You can use it to extend current objects with other objects' properties, strip strings, and introspect on functions.

*Warning:* This library will extend Object.prototype, Function.prototype, and String.prototype if you require it with `require("caffeine")`. You may want to use `var Caffeine = require("caffeine/core")` and then do your own magic with the other library files.