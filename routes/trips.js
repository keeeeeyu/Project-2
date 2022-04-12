const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');
const isLoggedIn = require('../config/auth');


//localhost:3000/
router.get('/countries/:id/trips/new', isLoggedIn, tripsCtrl.new);
router.post('/countries/:id/trips/new', tripsCtrl.create);
router.delete('/trips/:id', tripsCtrl.delete);
router.get('/trips/:id/edit', tripsCtrl.edit);

module.exports = router;