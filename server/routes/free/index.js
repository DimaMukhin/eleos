const express = require('express');

const router = express.Router();

/**
 * GET /free
 */
router.get('/', (req, res) => {
  res.status(200).send('hello free');
});

module.exports = router;
