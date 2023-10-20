const _ = require('lodash')
const cities = require('./data.json')

const output = _(cities)
    .filter(c => c.population > 500000)
    .value()


console.log(output)