// routes/registrationRoutes.js
const express = require('express');
const router = express.Router();
const registrationController = require('../controller/RegistrationController');


// API endpoint for participant registration
router.post('/register', registrationController.registerParticipant);

module.exports = router;
