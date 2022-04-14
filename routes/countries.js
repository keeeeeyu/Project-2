const express = require("express");
const router = express.Router();
const countriesCtrl = require('../controllers/countries')

// localhost:3000/countries
router.get('/', countriesCtrl.index);
router.post('/', countriesCtrl.create);
router.get('/:id', countriesCtrl.show);
router.post('/show', countriesCtrl.search);




module.exports = router;