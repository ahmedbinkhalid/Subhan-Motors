const express = require('express');
const router = express.Router();
const subsController = require('../Controllers/subsController');

router.post('/subscribe', subsController.addSubscriber);

module.exports = router;