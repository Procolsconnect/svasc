const mongoose = require('../../fake-mongoose.js');

const certificationSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Certification', certificationSchema);
