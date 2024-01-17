const express = require('express');
const router = express.Router();
const resultController = require('../controller/ResultController');

// Define your result routes here
router.get('/all', resultController.getAllResults);
router.post('/add', resultController.addResult);
router.delete('/:eventName', resultController.deleteResult);
router.get('/',(req,res)=>{res.send("result")});
module.exports = router;
