const express = require('express');
const craigslistService = require('../services/craigslist.service');

const router = express.Router();

/**
 * GET /free
 */
router.get('/', async (req, res) => {
    try {
        const listings = await craigslistService.findFree({
            city: 'vancouver',
            item: 'kayak'
        });
        res.status(200).send(listings);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
