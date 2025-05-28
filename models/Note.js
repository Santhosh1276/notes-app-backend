const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    pinned :Boolean
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
