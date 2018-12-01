const express = require('express');
const FreeRoutes = require('./free');

const router = express.Router();

/**
 * API Health status
 */
router.get('/', (req, res) => {
  res.status(200).send('ok');
});

// routes
router.use('/free', FreeRoutes);

module.exports = router;
