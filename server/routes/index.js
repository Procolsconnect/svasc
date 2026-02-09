const express = require('express');
const router = express.Router();
const risingStarRoutes = require('./alumni.route');

router.use('/rising-stars', risingStarRoutes);

module.exports = router;
