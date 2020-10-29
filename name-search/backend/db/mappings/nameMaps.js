module.exports = [
    {
      mapId: 'nameMap',
      idProperty: 'uuid',
      properties: [
        'name',
        'meaning',
        'num_syllables',
        'char_length',
      ],
      associations: [
        {name: 'country', mapId: 'countryMap', columnPrefix: 'name_country_'},
        {name: 'source', mapId: 'sourceMap', columnPrefix: 'name_source_'}
      ]
    }
  ]