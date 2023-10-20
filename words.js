// Работа с текстом с использованием библиотеки lodash
const text = require('./text')
const _ = require('lodash')

const topWords = _.flow([
    _.toLower,
    _.words,
    _.countBy,
    _.toPairs,
    _.partial(_.orderBy, _, 1, 'desc'),
    _.partial(_.take, _, 9),
    _.fromPairs
])

console.log(topWords(text))