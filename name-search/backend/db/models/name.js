const pg = require('../pg')
const joinjs = require('join-js').default
const relationMaps = require('../mappings')
const debug = require('debug')('name-search:db:name')

const name = {}

name.findNamebySubstr = async (substr) => {
    const query = {
      text: 'select * from search_name_substr($1)',
      values: [substr]
    }
  
    debug(query)
  
    const result = await pg.query(query)
    return joinjs.map(result.rows, relationMaps, 'nameMap', 'name_')
  }

name.addName = async (name, name_meaning, num_syllables, char_length, country_uuid, source_uuid) => {
    const query = {
      text: 'select * from add_name($1, $2, $3, $4, $5, $6)',
      values: [name, name_meaning, num_syllables, char_length, country_uuid, source_uuid]
    }
  
    debug(query)
  
    const result = await pg.query(query)
    return joinjs.map(result.rows, relationMaps, 'nameMap', 'name_')[0]
  }



module.exports = name