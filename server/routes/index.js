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
const awardsGalleryRoutes = require('./awards-gallery.route');
const newsletterRoutes = require('./newsletter.route');
const latestBlogRoutes = require('./latest-blog.route');

router.use('/alumni', alumniRoutes);
router.use('/home', homeRoutes);
router.use('/activities', activitiesRoutes);
router.use('/blogs', blogsRoutes);
router.use('/events', eventsRoutes);
router.use('/programs', programsRoutes);
router.use('/about', aboutRoutes);
router.use('/exam', examRoutes);
router.use('/awards-gallery', awardsGalleryRoutes);
router.use('/newsletter', newsletterRoutes);
router.use('/latest-blog', latestBlogRoutes);

module.exports = router;
