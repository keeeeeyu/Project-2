const Country = require('../models/country');


module.exports = {
    new: newTrip,
    create,
    delete: deleteTrip,
    edit,
    update
}

function newTrip(req, res) {
    Country.findById(req.params.id, function(err, country) {
        res.render('trips/new', {
            country
        })
    })

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
        if(!trip.user.equals(req.user._id)) return res.redirect(`/countries/${countryDoc._id}`)

        trip.remove()

        countryDoc.save(function(err) {
            if(err) next(err);
            res.redirect(`/countries/${countryDoc._id}`)
        })
    })
}

// function edit(req, res) {
//     console.log(req.params.id)
//     Country.findOne({'trip._id': req.params.id}, function(err, trip) {
//         res.render('trips/edit', {
//             trip
//         })
//     })
// }

function edit(req, res) {
    Country.findOne({'trip._id': req.params.id}, function(err, country) {
        const trip = country.trip.id(req.params.id);
        res.render('trips/edit', {
            trip
        })
    })
}

function update(req, res) {
    Country.findOne({'trip._id': req.params.id}, function(err, tripDoc) {
        const trip = tripDoc.trip.id(req.params.id);
        if(!trip.user.equals(req.user._id)) return res.redirect(`countries/${tripDoc._id}`)

        trip.city = req.body.city;
        trip.month = req.body.month;
        trip.restaurant = req.body.restaurant;
        trip.hotel = req.body.hotel;
        trip.tip = req.body.tip;

        tripDoc.save(function(err) {
            res.redirect(`/countries/${tripDoc._id}`);
        })
        console.log(trip.city,'<---------trip')
    })
}

// function edit(req, res) {
//     Country.findOne({'trip._id': req.params.id}, function(err, trip) {
//         Country.findOne({'country_.id': req.params.id}, function(err, country) {
//             res.render('trips/edit', {
//                 trip,
//                 country
//             })
//         })
//     })
    
// }