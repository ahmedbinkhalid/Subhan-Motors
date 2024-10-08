const { model } = require('mongoose');
const { submitBlog, approveBlog, getpendingBlog, rejectBlog, getApprovedBlogs, getBlogById } = require('../Controllers/blogController');
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
router.get('/blogs', getApprovedBlogs);
router.get('/blogs/:id', getBlogById);

module.exports = router;

