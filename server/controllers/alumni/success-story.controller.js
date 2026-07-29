const SuccessStoryService = require('../../services/alumni/success-story.service');
const path = require('path');
const fs = require('fs');

const getAllStories = async (req, res) => {
    try {
        const stories = await SuccessStoryService.getAllStories();
        res.status(200).json({
            success: true,
            data: stories,
            message: "Success Stories fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const createStory = async (req, res) => {
    try {
        const { name, role, description, order } = req.body;

        if (!name || !role) {
            return res.status(400).json({
                success: false,
                message: 'Name and role are required'
            });
        }

        let storyData = { name, role, description, order: order || 0 };

        if (req.file) {
            storyData.image = `/uploads/${req.file.filename}`;
        }

        const story = await SuccessStoryService.createStory(storyData);
        res.status(201).json({
            success: true,
            data: story,
            message: "Success Story created successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateStory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, role, description, order } = req.body;
        let updateData = {};

        if (name) updateData.name = name;
        if (role) updateData.role = role;
        if (description !== undefined) updateData.description = description;
        if (order !== undefined) updateData.order = order;

        if (req.file) {
            const oldStory = await SuccessStoryService.getStoryById(id);
            if (oldStory && oldStory.image) {
                const oldFilePath = path.join(__dirname, '..', '..', 'uploads', path.basename(oldStory.image));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.image = `/uploads/${req.file.filename}`;
        }

        const updatedStory = await SuccessStoryService.updateStory(id, updateData);
        if (!updatedStory) {
            return res.status(404).json({
                success: false,
                message: "Success Story not found"
            });
        }
        res.status(200).json({
            success: true,
            data: updatedStory,
            message: "Success Story updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteStory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStory = await SuccessStoryService.deleteStory(id);
        if (!deletedStory) {
            return res.status(404).json({
                success: false,
                message: "Success Story not found"
            });
        }
        res.status(200).json({
            success: true,
            message: 'Success Story deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllStories,
    createStory,
    updateStory,
    deleteStory
};
