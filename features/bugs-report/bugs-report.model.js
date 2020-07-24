const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bugsReportSchema = new Schema({
    user_id: {
        type: String,
        unique: true,
        required: true
    },
    bugReport: {
        type: String,
        unique: false,
        required: true
    }
},
    {
        autoIndex: false,
        timestamps: true
    });

module.exports = bugsReportSchema;   