const Country = require('../models/country');

module.exports = {
    new: newTrip,
    create
}

function newTrip(req, res) {
    res.render('trips/new')
}

function create(req, res) {
    Country.findById(req.params.id, function(err, country) {
        console.log(req.params.id)
    //     country.trip.push(req.body);
    //     console.log(req.body)
    //     console.log(req.params.id)
    //     country.save(function(err) {
    //         if(err) return res.redirect('/trips/new');
    //     })
    //     res.redirect(`/countries/${country._id}`)
    })
}