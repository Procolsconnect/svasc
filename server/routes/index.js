const express = require('express');
const router = express.Router();
const alumniRoutes = require('./alumni.route');
const homeRoutes = require('./home.route');

router.use('/alumni', alumniRoutes);
router.use('/home', homeRoutes);

module.exports = router;
