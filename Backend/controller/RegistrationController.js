//controllers/registrationController.js
const Registration = require('../models/Registration');

const registerParticipant = async (req, res) => {
  console.log(req.body);
  try {
    const {
      event_name,
      domain_id,
      domain_name,
      name,
      usn,
      contact,
      email,
    } = req.body;

    const newParticipant = new Registration({
      event_name,
      domain_id,
      domain_name,
      name,
      usn,
      contact,
      email,
    });
    console.log(newParticipant,"regcontrol");
    await newParticipant.save();
    res.status(201).json({ message: 'Participant registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal server error' });
    {/*
    if (error.name === 'ValidationError') {
      // Handle Mongoose validation errors
      const validationErrors = {};

      // Iterate over the errors and populate validationErrors
      Object.keys(error.errors).forEach(field => {
        validationErrors[field] = error.errors[field].message;
      });

      res.status(400).json({ error: validationErrors });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }*/}
  }
};

module.exports = {
  registerParticipant,
};

