const _ = require("lodash")

function mult(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

//


// function partial(fn, ...fixed) {
//     return function(...args) {
//         return fn.apply(this, fixed.concat(args))
//     }
// }


// function partial(fn) {
//     const fixed = _.tail(_.toArray(arguments))
//     return function() {
//         return fn.apply(this, _.concat(fixed, arguments))
//     }
// }



// const double = _.partial(mult, 2)

// console.log(double(25))

// const half = _.partial(divide, _, 2)

// console.log(half(4))

//___________________________________________


// const curriedDivide = _.curry(divide)

// console.log(curriedDivide(16, 4))
// console.log(curriedDivide(8)(4))

const notFlatArray = [1, 2, 3, [4, 5]]
console.log(_.sum(notFlatArray))

const sumFlat = _.flow([_.concat, _.flattenDeep, _.sum])
console.log(sumFlat(notFlatArray))