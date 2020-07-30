const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatHistorySchema = new Schema({
    sessionId: {
        type: String,
        unique: true,
        required: true
    },
    chatHistory: {
        type: String,
        unique: false,
        required: true
    }
},
    {
        autoIndex: false,
        timestamps: true
    });

module.exports = chatHistorySchema;   