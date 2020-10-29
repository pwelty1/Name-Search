const router = require('express-promise-router')()
const handlers = router._handlers = {}
const db = require('../db')
const bodyParser = require('body-parser')
const debug = require('debug')('ns:api:source')

router.get('/:source', handlers.get_source = async (req, res) => {
    try {
      const source = await db.source.findSource(req.params.source)
      res.status(200).json({
        success: true,
        data: source
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  })

router.post('/',bodyParser.json(), handlers.add_source = async (req, res) => {
    try {
      const source = await db.source.addSource(req.body.source)
      res.status(200).json({
        success: true,
        data: source
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  })




module.exports = router