const Activities = require('../models/activities.model');
const fs = require('fs');
const path = require('path');

const getAllActivities = async () => {
    return await Activities.find().sort({ order: 1, createdAt: -1 });
};

const getActivityById = async (id) => {
    return await Activities.findById(id);
};

const getActivityCount = async () => {
    return await Activities.countDocuments();
};

const createActivity = async (data) => {
    const activity = new Activities(data);
    return await activity.save();
};

const updateActivity = async (id, data) => {
    return await Activities.findByIdAndUpdate(id, data, { new: true });
};

const deleteActivity = async (id) => {
    const activity = await Activities.findById(id);
    if (activity) {
        // Delete banner image
        if (activity.bannerImage) {
            const bannerPath = path.join(__dirname, '..', 'uploads', path.basename(activity.bannerImage));
            if (fs.existsSync(bannerPath)) {
                fs.unlinkSync(bannerPath);
            }
        }

        // Delete all card images
        if (activity.cards && activity.cards.length > 0) {
            activity.cards.forEach(card => {
                if (card.image) {
                    const cardImagePath = path.join(__dirname, '..', 'uploads', path.basename(card.image));
                    if (fs.existsSync(cardImagePath)) {
                        fs.unlinkSync(cardImagePath);
                    }
                }
            });
        }
    }
    return await Activities.findByIdAndDelete(id);
};

module.exports = {
    getAllActivities,
    getActivityById,
    getActivityCount,
    createActivity,
    updateActivity,
    deleteActivity
};
