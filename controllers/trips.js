const Country = require('../models/country');
const User = require('../models/user')

module.exports = {
    new: newTrip,
    create
}

function newTrip(req, res) {
    Country.findById(req.params.id, function(err, countries) {
        res.render('trips/new', {
            countries
        })
    })
    console.log(req.user)
}

function create(req, res) {
    Country.findById(req.params.id, function(err, country) {
        country.trip.push(req.body);
        country.save(function(err) {
            if(err) return res.redirect('/trips/new');
        })
        res.redirect(`/countries/${country._id}`)
    })
}