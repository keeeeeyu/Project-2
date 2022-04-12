const Country = require('../models/country');


module.exports = {
    new: newTrip,
    create,
    delete: deleteTrip
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
        req.body.user = req.user._id;
        req.body.userName = req.user.name;

        country.trip.push(req.body);
        country.save(function(err) {
            if(err) return res.redirect('/trips/new');
        })
        res.redirect(`/countries/${country._id}`)
    })
}

function deleteTrip(req, res, next) {
    Country.findOne({'trip._id': req.params.id}, function(err, countryDoc) {
        const trip = countryDoc.trip.id(req.params.id);
        console.log(trip,'<---------this is trip---------')
        if(!trip.user.equals(req.user._id)) return res.redirect(`/countries/${countryDoc._id}`)

        trip.remove()

        countryDoc.save(function(err) {
            if(err) next(err);
            res.redirect(`/countries/${countryDoc._id}`)
        })
    })
}