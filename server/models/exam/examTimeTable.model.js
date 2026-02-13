const mongoose = require('mongoose');

const examTimeTableSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['bu', 'cia'],
        lowercase: true
    },
    file: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ExamTimeTable', examTimeTableSchema);
