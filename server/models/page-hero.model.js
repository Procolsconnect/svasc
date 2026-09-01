const mongoose = require('mongoose');

const pageHeroSchema = new mongoose.Schema({
    pageKey: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('PageHero', pageHeroSchema);
