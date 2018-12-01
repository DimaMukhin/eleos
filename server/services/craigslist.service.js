const craigslist = require('node-craigslist');

const client = new craigslist.Client();

const craigslistService = {};

craigslistService.findFree = async ({
    city,
    item,
    email
}) => {
    return await client.search({ city }, item);
};

module.exports = craigslistService;
