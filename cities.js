const _ = require('lodash')
const cities = require('./data.json')

//Деклоративный подход(сортировка данных из массива )

// const output = _(cities)
//     .filter(c => c.population > 100000)
//     .countBy(c => c.country)
//     .toPairs()
//     .map(c => _.zipObject(['country', 'cities'], c))
//     .orderBy(c => c.cities, 'desc')
//     // .take(3)
//     .value()


// console.log(output)


// Пример коррирования с последующей сортировкой и выводом

const greaterThan = _.curryRight(_.gte)
const populationGraterThan = num => _.conforms({ population: greaterThan(num) })
const zip = _.curry(_.zipObject)

const out = _(cities)
    .filter(populationGraterThan(100000))
    .countBy('country')
    .toPairs()
    .map(zip(['country', 'cities']))
    .orderBy('cities', 'desc')
    .take(3)
    .value()

console.log(out)

