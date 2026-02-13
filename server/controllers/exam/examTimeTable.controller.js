const ExamTimeTableService = require('../../services/exam/examTimeTable.service');
const path = require('path');
const fs = require('fs');

const getAllExams = async (req, res) => {
    try {
        const exams = await ExamTimeTableService.getAllExamTimeTables();
        res.status(200).json({
            success: true,
            data: exams,
            message: "Exam time tables fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getExamById = async (req, res) => {
    try {
        const { id } = req.params;
        const exam = await ExamTimeTableService.getExamTimeTableById(id);
        if (!exam) {
            return res.status(404).json({
                success: false,
                message: "Exam time table not found"
            });
        }
        res.status(200).json({
            success: true,
            data: exam,
            message: "Exam time table fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const createExam = async (req, res) => {
    try {
        const { title, category } = req.body;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "PDF file is required"
            });
        }

        const filePath = `/uploads/${req.file.filename}`;

        const exam = await ExamTimeTableService.createExamTimeTable({
            title,
            category,
            file: filePath
        });

        res.status(201).json({
            success: true,
            data: exam,
            message: "Exam time table created successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateExam = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, category } = req.body;
        let updateData = { title, category };

        if (req.file) {
            const oldExam = await ExamTimeTableService.getExamTimeTableById(id);
            if (oldExam && oldExam.file) {
                const oldFilePath = path.join(__dirname, '..', '..', 'uploads', path.basename(oldExam.file));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.file = `/uploads/${req.file.filename}`;
        }

        const updatedExam = await ExamTimeTableService.updateExamTimeTable(id, updateData);
        if (!updatedExam) {
            return res.status(404).json({
                success: false,
                message: "Exam time table not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedExam,
            message: "Exam time table updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteExam = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedExam = await ExamTimeTableService.deleteExamTimeTable(id);
        if (!deletedExam) {
            return res.status(404).json({
                success: false,
                message: "Exam time table not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Exam time table deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllExams,
    getExamById,
    createExam,
    updateExam,
    deleteExam
};
