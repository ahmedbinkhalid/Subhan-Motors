const express = require('express');
const router = express.Router();
const sellController = require('../Controllers/sellController');
const {isUser, verifyToken, isAdmin, isAdminorUser} = require('../Middlewares/middleware');
const multer = require('multer');
const path = require('path');
// Set up Multer for file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads'); // Save the files in /public/uploads directory
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fieldSize: 10 * 1024 * 1024, fileSize: 5 * 1024 * 1024 }, // 5MB size limit
    fileFilter: function (req, file, cb) {
        // Accept images only
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Please upload only images.'));
        }
        cb(null, true);
    }
});

// User Route to post Ad for selling car
router.post('/addcars', verifyToken, isUser, upload.array('images', 10), sellController.addCar);

// Route to get all new cars
router.get('/newcars', sellController.getNewCars);

// Route to get new car by Id
router.get('/newcars/:id', sellController.getNewCarById);

// Admin Route to add new car for sale
router.post('/postcar', verifyToken, isAdmin, upload.array('images', 10), sellController.newCars);

// Route to get all cars (used and bankreleased)
router.get('/getcars', sellController.getAllCars);

// Route to get car by id
router.get('/getCarById/:id', sellController.getCarById);

// Route to only get used cars
router.get('/usedcars', sellController.getUsedCars);

// Route to only get bank released cars
router.get('/bankcars', sellController.getBankCars);

// Route for search bar
router.get('/searchcars/:key', sellController.SearchCars);

// User Route to get Ads posted by user for selling car
router.get('/usercars', verifyToken, isUser, sellController.getUserCars);

// User route to delete car Ad
router.delete('/deletecar/:id', verifyToken, isUser, sellController.deleteCar);

// User route to update Car Ad
router.put('/updatecar/:id', verifyToken, isUser, upload.array('images', 10), sellController.updateCar);

module.exports = router;