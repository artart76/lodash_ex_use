const { functions } = require("lodash")

function mult(a, b) {
    return a * b
}

function partial(fn, ...fixed) {
    return function(...args) {
        return fn.apply(this, fixed.concat(args))
    }
}

const double = partial(mult, 2)

console.log(double(25))