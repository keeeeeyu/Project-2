const express = require("express");
const router = express.Router();
const countriesCtrl = require('../controllers/countries')
const isLoggedIn = require('../config/auth')


router.get('/', countriesCtrl.index);
router.get('/', isLoggedIn, countriesCtrl.new)
router.post('/', countriesCtrl.create);
router.get('/:id', countriesCtrl.show);





module.exports = router;