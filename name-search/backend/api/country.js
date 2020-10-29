const router = require('express-promise-router')()
const handlers = router._handlers = {}
const db = require('../db')
const bodyParser = require('body-parser')
const debug = require('debug')('ns:api:country')

router.get('/:country', handlers.get_country = async (req, res) => {
    try {
      const country = await db.country.findCountryByName(req.params.country)
      res.status(200).json({
        success: true,
        data: country
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  })

router.post('/', bodyParser.json(), handlers.add_country = async (req, res) => {
    try {
      const country = await db.country.addCountry(req.body.country_name, req.body.language)
      res.status(200).json({
        success: true,
        data: country
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  })




module.exports = router