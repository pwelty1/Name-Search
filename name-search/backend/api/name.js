const router = require('express-promise-router')()
const handlers = router._handlers = {}
const db = require('../db')
const bodyParser = require('body-parser')
const debug = require('debug')('ns:api:name')

router.get('/:name', handlers.get_names = async (req, res) => {
    try {
      const name = await db.name.findNamebySubstr(req.params.name)
      res.status(200).json({
        success: true,
        data: name
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  })

router.post('/', bodyParser.json(), handlers.add_name = async (req, res) => {
    try {
      let source = {}
      if(req.body.source != null){
        source = await db.source.findSource(req.body.source)
      }
      else{
        source = {uuid: null}
      }
      let country = {}
      if(req.body.country != null){
        country = await db.country.findCountryByName(req.body.country)
      }
      else{
        country = {uuid: null}
      }
      const name = await db.name.addName(req.body.name, req.body.meaning, req.body.num_syllables, req.body.name.length, country.uuid, source.uuid)
      res.status(200).json({
        success: true,
        data: name
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  })




module.exports = router