const express = require('express');
const router = express.Router();
const alumniRoutes = require('./alumni.route');
const homeRoutes = require('./home.route');
const activitiesRoutes = require('./activities.route');
const blogsRoutes = require('./blogs.route');
const eventsRoutes = require('./events.route');

const programsRoutes = require('./programs.route');

router.use('/alumni', alumniRoutes);
router.use('/home', homeRoutes);
router.use('/activities', activitiesRoutes);
router.use('/blogs', blogsRoutes);
router.use('/events', eventsRoutes);
router.use('/programs', programsRoutes);

module.exports = router;
