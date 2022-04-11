const Country = require('../models/country');


module.exports = {
    index,
    create,
    show
}



function index(req, res) {
    Country.find({}, function(err, countries) {
       console.log(countries, '<-------------')
        res.render('countries/index', {
            countries
        })
    })
};

function create(req, res) {
    const country = new Country(req.body);
    country.save(function(err) {
        if(err) return res.redirect('/countries');

    })
    res.redirect('/countries')
  
}

function show(req, res) {
    Country.findById(req.params.id), function(err, country) {
        res.render('countries/show', {
            country
        })
        console.log(country)
    }
}