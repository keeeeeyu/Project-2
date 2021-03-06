const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: {
        type: String,
        required: true
    }}, {
        timestamps: true 
});

module.exports = mongoose.model('User', userSchema);