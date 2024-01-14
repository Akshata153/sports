const express = require('express');
const router = express.Router();
const resultController = require('../controller/ResultController');

// Define your result routes here
router.get('/results', resultController.getAllResults);
router.post('/results', resultController.addResult);
router.delete('/results/:eventName', resultController.deleteResult);

module.exports = router;
