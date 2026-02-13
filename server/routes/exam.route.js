const express = require('express');
const router = express.Router();
const examController = require('../controllers/exam/examTimeTable.controller');
const upload = require('../middlewares/uploadMiddleware');

router.get('/', examController.getAllExams);
router.get('/:id', examController.getExamById);
router.post('/', upload.single('file'), examController.createExam);
router.put('/:id', upload.single('file'), examController.updateExam);
router.delete('/:id', examController.deleteExam);

module.exports = router;
