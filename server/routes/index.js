const express = require('express');
const router = express.Router();
const alumniRoutes = require('./alumni.route');
const homeRoutes = require('./home.route');
const activitiesRoutes = require('./activities.route');
const blogsRoutes = require('./blogs.route');
const eventsRoutes = require('./events.route');

const programsRoutes = require('./programs.route');
const aboutRoutes = require('./about.route');
const examRoutes = require('./exam.route');

router.use('/alumni', alumniRoutes);
router.use('/home', homeRoutes);
router.use('/activities', activitiesRoutes);
router.use('/blogs', blogsRoutes);
router.use('/events', eventsRoutes);
router.use('/programs', programsRoutes);
router.use('/about', aboutRoutes);
router.use('/exam', examRoutes);

module.exports = router;
