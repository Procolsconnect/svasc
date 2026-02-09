const express = require('express');
const router = express.Router();
const risingStarController = require('../controllers/alumni/rising-star.controller');
const successStoryController = require('../controllers/alumni/success-story.controller');
const upload = require('../middlewares/uploadMiddleware');

// Rising Star routes
router.get('/rising-stars', risingStarController.getAllStars);
router.post('/rising-stars', upload.single('video'), risingStarController.createStar);
router.put('/rising-stars/:id', upload.single('video'), risingStarController.updateStar);
router.delete('/rising-stars/:id', risingStarController.deleteStar);

// Success Story routes
router.get('/success-stories', successStoryController.getAllStories);
router.post('/success-stories', upload.single('image'), successStoryController.createStory);
router.put('/success-stories/:id', upload.single('image'), successStoryController.updateStory);
router.delete('/success-stories/:id', successStoryController.deleteStory);

module.exports = router;
