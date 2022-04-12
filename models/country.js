const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    city: {type: String},
    month: {
        type: String,
    },
    restaurant: {type: String},
    hotel: {type: String},
    tip: {type: String},
    like: {type: Number},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
})

const countrySchema = new Schema({
    country: {type: String},
    trip: [tripSchema],
})



module.exports = mongoose.model('Country', countrySchema);