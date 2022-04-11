const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips')


//localhost:3000/
router.get('/countries/:id/trips/new', tripsCtrl.new);
router.post('/countries/:id/trips/new', tripsCtrl.create)
router.delete('/trips/:id', tripsCtrl.delete)

module.exports = router;