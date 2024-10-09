const queryController = require('../Controllers/queryController');
const {verifyToken, isUser, isAdmin} = require('../Middlewares/middleware')
const express = require('express');
const router = express.Router();

router.post('/query',verifyToken, isUser, queryController.postQuery);
router.get('/getQueries', verifyToken, isAdmin, queryController.getQuery);
router.get('/query/:id', verifyToken, isAdmin, queryController.getQueryById);

module.exports = router;