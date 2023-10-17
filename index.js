const _ = require('lodash');

const c = value => { console.log(value) };


// const result = _.chunk(["a", "b", "c", "d", "e", "f"], 2);
//=>[ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]


// const result = _.compact([0, 1, false, 2, "", 3]);
//=>[ 1, 2, 3 ]


// const result = _.difference([2, 1], [2, 3]);
//=> [ 1 ]


const users = [
    { "user": 'Arkadiy', "active": false },
    { "user": 'Fedor', "active": false },
    { "user": 'Ivan', "active": true }
];

// const result = _.findIndex(users, function(o) { return o.user == "Arkadiy"; });
//=> 0
// const result = _.findIndex(users, ["active", true]);
//=> 2
// const result = _.findIndex(users, { "user": "Fedor", "active": false });
//=> 1
const result = _.findIndex(users, "active");
//=> 2





c(result);