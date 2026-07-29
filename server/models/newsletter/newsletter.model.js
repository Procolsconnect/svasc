const mongoose = require('../../fake-mongoose.js');

const newsletterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    pdf: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Newsletter', newsletterSchema);
