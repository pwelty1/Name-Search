const sourceMaps = require('./sourceMaps')
const countryMaps = require('./countryMaps')
const nameMaps = require('./nameMaps')


module.exports = [
  ...sourceMaps,
  ...countryMaps,
  ...nameMaps,
]