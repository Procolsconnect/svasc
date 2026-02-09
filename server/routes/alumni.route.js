const express = require('express');
const router = express.Router();
const risingStarController = require('../controllers/alumni/rising-star.controller');
const upload = require('../middlewares/uploadMiddleware');

router.get('/', risingStarController.getAllStars);
router.post('/', upload.single('video'), risingStarController.createStar);
router.put('/:id', upload.single('video'), risingStarController.updateStar);
router.delete('/:id', risingStarController.deleteStar);

module.exports = router;
