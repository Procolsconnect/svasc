const ActivitiesService = require('../services/activities.service');
const path = require('path');
const fs = require('fs');

const getAllActivities = async (req, res) => {
    try {
        const activities = await ActivitiesService.getAllActivities();
        res.status(200).json({
            success: true,
            data: activities,
            message: "Activities fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getActivityById = async (req, res) => {
    try {
        const { id } = req.params;
        const activity = await ActivitiesService.getActivityById(id);
        if (!activity) {
            return res.status(404).json({
                success: false,
                message: "Activity not found"
            });
        }
        res.status(200).json({
            success: true,
            data: activity,
            message: "Activity fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const createActivity = async (req, res) => {
    try {
        const { category, description, cardTitles } = req.body;

        // Validate banner image
        if (!req.files || !req.files.bannerImage || req.files.bannerImage.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Banner image is required'
            });
        }

        // Validate card images and titles
        if (!req.files.cardImages || req.files.cardImages.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'At least one card image is required'
            });
        }

        let parsedCardTitles = [];
        try {
            parsedCardTitles = JSON.parse(cardTitles);
        } catch (e) {
            return res.status(400).json({
                success: false,
                message: 'Card titles must be a valid JSON array'
            });
        }

        if (parsedCardTitles.length !== req.files.cardImages.length) {
            return res.status(400).json({
                success: false,
                message: 'Number of card titles must match number of card images'
            });
        }

        // Automatically assign order based on current count
        const currentCount = await ActivitiesService.getActivityCount();

        // Build cards array
        const cards = req.files.cardImages.map((file, index) => ({
            title: parsedCardTitles[index],
            image: `/uploads/${file.filename}`
        }));

        const bannerImagePath = `/uploads/${req.files.bannerImage[0].filename}`;

        const activity = await ActivitiesService.createActivity({
            category,
            description,
            bannerImage: bannerImagePath,
            cards,
            order: currentCount
        });

        res.status(201).json({
            success: true,
            data: activity,
            message: "Activity created successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateActivity = async (req, res) => {
    try {
        const { id } = req.params;
        const { category, description, cardTitles } = req.body;
        let updateData = { category, description };

        // Handle banner image update
        if (req.files && req.files.bannerImage && req.files.bannerImage.length > 0) {
            const oldActivity = await ActivitiesService.getActivityById(id);
            if (oldActivity && oldActivity.bannerImage) {
                const oldFilePath = path.join(__dirname, '..', 'uploads', path.basename(oldActivity.bannerImage));
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.bannerImage = `/uploads/${req.files.bannerImage[0].filename}`;
        }

        // Handle card images update
        if (req.files && req.files.cardImages && req.files.cardImages.length > 0) {
            let parsedCardTitles = [];
            try {
                parsedCardTitles = JSON.parse(cardTitles);
            } catch (e) {
                return res.status(400).json({
                    success: false,
                    message: 'Card titles must be a valid JSON array'
                });
            }

            if (parsedCardTitles.length !== req.files.cardImages.length) {
                return res.status(400).json({
                    success: false,
                    message: 'Number of card titles must match number of card images'
                });
            }

            // Delete old card images
            const oldActivity = await ActivitiesService.getActivityById(id);
            if (oldActivity && oldActivity.cards && oldActivity.cards.length > 0) {
                oldActivity.cards.forEach(card => {
                    if (card.image) {
                        const oldCardPath = path.join(__dirname, '..', 'uploads', path.basename(card.image));
                        if (fs.existsSync(oldCardPath)) {
                            fs.unlinkSync(oldCardPath);
                        }
                    }
                });
            }

            // Build new cards array
            updateData.cards = req.files.cardImages.map((file, index) => ({
                title: parsedCardTitles[index],
                image: `/uploads/${file.filename}`
            }));
        }

        const updatedActivity = await ActivitiesService.updateActivity(id, updateData);
        if (!updatedActivity) {
            return res.status(404).json({
                success: false,
                message: "Activity not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedActivity,
            message: "Activity updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteActivity = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedActivity = await ActivitiesService.deleteActivity(id);
        if (!deletedActivity) {
            return res.status(404).json({
                success: false,
                message: "Activity not found"
            });
        }
        res.status(200).json({
            success: true,
            message: 'Activity deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllActivities,
    getActivityById,
    createActivity,
    updateActivity,
    deleteActivity
};
