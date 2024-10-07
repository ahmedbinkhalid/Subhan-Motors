const { model } = require('mongoose');
const { submitBlog, approveBlog, getpendingBlog, rejectBlog } = require('../Controllers/blogController');
const { isBlogger, isAdmin, verifyToken } = require('../Middlewares/middleware');
const express = require('express');
const router = express.Router();
const ratelimit = require('express-rate-limit');

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

router.post('/submit', verifyToken, isBlogger , submitBlog);
router.post('/approve', verifyToken, isAdmin,approveBlog);
router.get('/pending', verifyToken, isAdmin ,getpendingBlog);
router.post('/reject', verifyToken, isAdmin, rejectBlog);

module.exports = router;

