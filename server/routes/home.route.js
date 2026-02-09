const express = require('express');
const router = express.Router();
const valueSlideController = require('../controllers/home/value-slide.controller');
const upload = require('../middlewares/uploadMiddleware');

// Value Slide routes
router.get('/value-slides', valueSlideController.getAllSlides);
router.post('/value-slides', upload.single('backgroundImage'), valueSlideController.createSlide);
router.put('/value-slides/:id', upload.single('backgroundImage'), valueSlideController.updateSlide);
router.delete('/value-slides/:id', valueSlideController.deleteSlide);

module.exports = router;
