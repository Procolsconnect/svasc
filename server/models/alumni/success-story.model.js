const mongoose = require('mongoose');

const successStorySchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['text', 'image', 'video'],
        required: true
    },
    content: {
        type: String,
        required: function () {
            return this.type === 'text' || this.type === 'video';
        }
    },
    image: {
        type: String,
        required: function () {
            return this.type === 'image';
        }
    },
    order: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('SuccessStory', successStorySchema);
