const mongoose = require('mongoose');

const activityCardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    }
}, { _id: false });

const activitiesSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    bannerImage: {
        type: String,
        required: true
    },
    cards: {
        type: [activityCardSchema],
        default: []
    },
    order: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Activities', activitiesSchema);
