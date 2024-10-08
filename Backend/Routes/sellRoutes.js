const express = require('express');
const router = express.Router();
const sellController = require('../Controllers/sellController');
const {isUser, verifyToken} = require('../Middlewares/middleware');

router.post('/addcars',verifyToken, isUser, sellController.addCar);
router.get('/getcars', sellController.getAllCars);
router.get('/getCarById/:id', sellController.getCarById);
router.get('/usedcars', sellController.getUsedCars);
router.get('/bankcars', sellController.getBankCars);

module.exports = router;