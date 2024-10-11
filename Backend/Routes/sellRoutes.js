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
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB size limit
    fileFilter: function (req, file, cb) {
        // Accept images only
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Please upload only images.'));
        }
        cb(null, true);
    }
});

router.post('/addcars', verifyToken,isAdminorUser, upload.array('images', 10), sellController.addCar);
router.get('/newcars', sellController.getNewCars);
router.get('/newcars/:id', sellController.getNewCarById);
router.post('/postcar', verifyToken, isAdmin, upload.array('images', 10), sellController.newCars);
router.get('/getcars', sellController.getAllCars);
router.get('/getCarById/:id', sellController.getCarById);
router.get('/usedcars', sellController.getUsedCars);
router.get('/bankcars', sellController.getBankCars);
router.get('/searchcars/:key', sellController.SearchCars);

module.exports = router;