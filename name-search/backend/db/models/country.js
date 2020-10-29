const pg = require('../pg')
const joinjs = require('join-js').default
const relationMaps = require('../mappings')
const debug = require('debug')('name-search:db:country')

const country = {}

country.findCountryByName = async (country_name) => {
    const query = {
      text: 'select * from get_country_by_name($1)',
      values: [country_name]
    }
  
    debug(query)
  
    const result = await pg.query(query)
    return joinjs.map(result.rows, relationMaps, 'countryMap', 'country_')[0]
  }

country.addCountry = async (country_name, country_language) => {
    const query = {
      text: 'select * from add_country($1, $2)',
      values: [country_name, country_language]
    }
  
    debug(query)
  
    const result = await pg.query(query)
    return joinjs.map(result.rows, relationMaps, 'countryMap', 'country_')[0]
  }



module.exports = country