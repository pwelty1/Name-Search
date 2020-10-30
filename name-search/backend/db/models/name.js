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

name.findNamebySubstrCountry = async (search, countryName) => {
    const query = {
        text: 'select * from search_name_substring_country($1, $2)',
        values: [search, countryName]
    }

    debug(query)

    const result = await pg.query(query)
    return joinjs.map(result.rows, relationMaps, 'nameMap', 'name_')
}

name.findNamebySubstrSyllables = async (search, syllables) => {
    const query = {
        text: 'select * from search_name_substring_syllables($1, $2)',
        values: [search, syllables]
    }

    debug(query)

    const result = await pg.query(query)
    return joinjs.map(result.rows, relationMaps, 'nameMap', 'name_')
}

name.findNamebySubstrLength = async (search, charLength) => {
    const query = {
        text: 'select * from search_name_substring_length($1, $2)',
        values: [search, charLength]
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
