const pg = require('../pg')
const joinjs = require('join-js').default
const relationMaps = require('../mappings')
const debug = require('debug')('ns:db:source')

const source = {}

source.findSource = async (source_name) => {
    const query = {
      text: 'select * from get_source_by_source($1)',
      values: [source_name]
    }
  
    debug(JSON.stringify(query))
  
    const result = await pg.query(query)
    return joinjs.map(result.rows, relationMaps, 'sourceMap', 'source_')
  }

  source.addSource = async (source_name) => {
    const query = {
      text: 'select * from add_source($1)',
      values: [source_name]
    }
  
    debug(JSON.stringify(query))
  
    const result = await pg.query(query)
    return joinjs.map(result.rows, relationMaps, 'sourceMap', 'source_')
  }

  module.exports = source