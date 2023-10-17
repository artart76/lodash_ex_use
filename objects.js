const _ = require('lodash');

// _.functions

// function Foo() {
//     this.a = _.constant('a');
//     this.b = _.constant('b');
// }

// Foo.prototype.c = _.constant('c');

// _.functions(new Foo);

// console.log(_.functions(new Foo));

//=>[ 'a', 'b' ]


// _.each->forEach

// _.each([1, "str"], function(item) {
//     console.log(item);
// })
//=> 1
//=> str

var a = { id: 1, name:"user name" }
_.each(a, function (item, index) {
    console.log(item, index);
})
//=> 1 id
//=> user name name