const express = require('express');
const craigslistService = require('../services/craigslist.service');

const router = express.Router();

const DEFAULT_CITY = 'vancouver';
const DEFAULT_ITEM = 'couch';

/**
 * GET /free
 */
router.get('/', async (req, res) => {
    const city = req.query.city || DEFAULT_CITY;
    const item = req.query.item || DEFAULT_ITEM;

    try {
        const listings = await craigslistService.findFree({ city, item });
        res.status(200).send(listings);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

/**
 * POST /free
 */
router.post('/', async (req, res) => {
    const slackReqObj = req.body;
    const city = req.query.city || DEFAULT_CITY;
    const item = slackReqObj.text || DEFAULT_ITEM;

    try {
        const listings = await craigslistService.findFree({ city, item });

        var responseString = "";

        for (listing of listings) {
            responseString+=`${listing.title}: ${listing.url} \n`;
        }
        res.status(200).send(responseString);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
