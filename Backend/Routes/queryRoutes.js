const queryController = require('../Controllers/queryController');
const {verifyToken, isUser, isAdmin} = require('../Middlewares/middleware')
const express = require('express');
const router = express.Router();

// Client route to submit Query
router.post('/query',verifyToken, isUser, queryController.postQuery);

// Admin Route to see all Queries
router.get('/getQueries', verifyToken, isAdmin, queryController.getQuery);

// Admin Route to view indiviual Query by Query Id
router.get('/query/:id', verifyToken, isAdmin, queryController.getQueryById);

router.post('/contact-us', verifyToken, isUser, queryController.postConact);
router.get('/getContact', verifyToken, isAdmin, queryController.getContact);
router.get('/contact/:id', queryController.getConById);

module.exports = router;