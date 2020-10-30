const router = require('express-promise-router')()
const handlers = router._handlers = {}
const db = require('../db')
const bodyParser = require('body-parser')
const debug = require('debug')('ns:api:name')

router.get('/', handlers.get_names = async (req, res) => {
    try {
        // Variables will either be valid or undefined

        var name = req.query.search; // type: String
        var bySubstring = req.query.bySubstring; //type: Boolean
        var countryName = req.query.countryName; //type: String
        var numSyllables = req.query.numSyllables; //type: Number (positive integer)
        var matchCharLength = req.query.matchCharLength; //type: Boolean

        // Get Name
        if (name === undefined) {
            name = "";
        }

        // check substring
        if (bySubstring !== undefined) {
            bySubstring = bySubstring.toLowerCase();
            if (!(bySubstring == "true" || bySubstring == "false")) {
                bySubstring = undefined;
            }
        }

        // Check num syllables is valid
        if (isNaN(numSyllables) || numSyllables < 1) {
            numSyllables = undefined;
        }

        // Character Length
        if (matchCharLength !== undefined) {
            matchCharLength = matchCharLength.toLowerCase();
            if (!(matchCharLength == "true" || matchCharLength == "false")) {
                matchCharLength = false;
            }
        }

        var charLength = undefined;
        if (matchCharLength == "true") {
            charLength = name.length;
        }


        var ifUndefThenNull = function(input) {
            if (input == undefined) {
                return null;
            }
            return input;
        }

        name = ifUndefThenNull(name);
        bySubstring = ifUndefThenNull(bySubstring);
        countryName = ifUndefThenNull(countryName);
        numSyllables = ifUndefThenNull(numSyllables);
        charLength = ifUndefThenNull(charLength);


        console.log("Name: " + name);
        console.log("bySubstring: " + bySubstring);
        console.log("countryName: " + countryName);
        console.log("numSyllables: " + numSyllables);
        console.log("charLength: " + charLength);

        var nameSearchResult;
        if (countryName !== null) {
            nameSearchResult = await db.name.findNamebySubstrCountry(name, countryName);
        } else if (numSyllables !== null) {
            nameSearchResult = await db.name.findNamebySubstrSyllables(name, numSyllables);
        } else if (charLength !== null) {
            nameSearchResult = await db.name.findNamebySubstrLength(name, charLength);
        } else {
            nameSearchResult = await db.name.findNamebySubstr(name);
        }

        res.status(200).json({
            success: true,
            data: nameSearchResult
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
