const { model } = require('mongoose');
const { submitBlog, approveBlog, getpendingBlog, rejectBlog, getApprovedBlogs, getBlogById } = require('../Controllers/blogController');
const { isBlogger, isAdmin, verifyToken } = require('../Middlewares/middleware');
const express = require('express');
const router = express.Router();
const ratelimit = require('express-rate-limit');
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

// Defining the rate limit for all the routes in this router
const limiter = ratelimit({
    windowMs: 15 * 60 * 100,
    max: 100,
    message: {
        status: 429,
        message: 'To many requests, please try again later.'
    }
});
// Applying the rate limit on all the routes in this router
router.use(limiter);

router.post('/submit', verifyToken, isBlogger , upload.array('images', 10), submitBlog);
router.post('/approve', verifyToken, isAdmin,approveBlog);
router.get('/pending', verifyToken, isAdmin ,getpendingBlog);
router.post('/reject', verifyToken, isAdmin, rejectBlog);
router.get('/blogs', getApprovedBlogs);
router.get('/blogs/:id', getBlogById);

module.exports = router;

