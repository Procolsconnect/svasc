const express = require('express');
const router = express.Router();
const alumniRoutes = require('./alumni.route');

router.use('/alumni', alumniRoutes);

module.exports = router;
