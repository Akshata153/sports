


// routes/registrationRoutes.js
const express = require('express');
const router = express.Router();
const registrationController = require('../controller/RegistrationController');
const Register = require('../models/Registration');
// API endpoint for participant registration
console.log("routeregister")
router.post('/add', registrationController.registerParticipant);
router.post('/', (req,res)=>{res.send("reg")});


module.exports = router;