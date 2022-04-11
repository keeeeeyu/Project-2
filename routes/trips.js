const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips')


//localhost:3000/trips
router.get('/', tripsCtrl.new);


module.exports = router;