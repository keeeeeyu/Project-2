const country = require('../models/country');
const Country = require('../models/country');


module.exports = {
    index,
    show,
    search
}



function index(req, res) {
    Country.find({}, function(err, countries) {
        res.render('countries/index', {
            countries
        })
    })
};

function show(req, res) {
    console.log(req.body)
    Country.findById(req.params.id, function(err, country) {
        res.render('countries/show', {
            country
        })
    })

}

function search(req, res) {
    Country.findOne({'country': req.body.country}, function(err, country) {
        res.render(`countries/show`, {
            country
        })
    })
}
