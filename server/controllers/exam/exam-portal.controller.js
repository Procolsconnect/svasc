const ExamPortalService = require('../../services/exam/exam-portal.service');
const path = require('path');
const fs = require('fs');

const getConfig = async (req, res) => {
    try {
        const config = await ExamPortalService.getConfig();
        res.status(200).json({ success: true, data: config });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateConfig = async (req, res) => {
    try {
        const { floatingTitle, floatingDateRange, floatingSubjects, floatingStatus, schedules } = req.body;
        const updateData = {};
        if (floatingTitle !== undefined) updateData.floatingTitle = floatingTitle;
        if (floatingDateRange !== undefined) updateData.floatingDateRange = floatingDateRange;
        if (floatingSubjects !== undefined) updateData.floatingSubjects = floatingSubjects;
        if (floatingStatus !== undefined) updateData.floatingStatus = floatingStatus;

        if (schedules) {
            try {
                updateData.schedules = JSON.parse(schedules);
            } catch (e) {
                return res.status(400).json({ success: false, message: "Schedules must be a valid JSON array" });
            }
        }

        const oldConfig = await ExamPortalService.getConfig();

        if (req.files) {
            ['image1', 'image2', 'image3'].forEach(fieldName => {
                if (req.files[fieldName] && req.files[fieldName].length > 0) {
                    // Delete old file if exists
                    if (oldConfig && oldConfig[fieldName]) {
                        const oldFilePath = path.join(__dirname, '..', '..', 'uploads', path.basename(oldConfig[fieldName]));
                        if (fs.existsSync(oldFilePath)) {
                            fs.unlinkSync(oldFilePath);
                        }
                    }
                    updateData[fieldName] = `/uploads/${req.files[fieldName][0].filename}`;
                }
            });
        }

        const config = await ExamPortalService.updateConfig(updateData);
        res.status(200).json({
            success: true,
            data: config,
            message: "Exam Portal configuration updated successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getConfig,
    updateConfig
};
