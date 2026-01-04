const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    description:
    {
        type: String,
        required: true,
    },
    createdAt:
    {
        type: Number,
        required: true,
    }
}, {timestamp: true});

const TODO = mongoose.model("todo", todoSchema);

module.exports = TODO;