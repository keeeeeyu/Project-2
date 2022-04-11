const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    country: {
        type: String
    },
    // trip: [tripSchema]
})



module.exports = mongoose.model('Country', countrySchema);