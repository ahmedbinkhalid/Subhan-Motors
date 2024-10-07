const express = require('express');
const router = express.Router();
const sellController = require('../Controllers/sellController');
const {isUser, verifyToken} = require('../Middlewares/middleware');

router.post('/cars',verifyToken, isUser, sellController.addCar);

module.exports = router;