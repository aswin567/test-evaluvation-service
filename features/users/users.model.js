const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    },
    f_name: {
        type: String,
        unique: false,
        required: true
    },
    l_name: {
        type: String,
        unique: false,
        required: true
    },
    type: {
        type: String,
        unique: false,
        required: true
    }
},
    {
        timestamps: true
    });

module.exports = userSchema;   