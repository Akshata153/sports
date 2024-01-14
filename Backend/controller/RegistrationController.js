// controllers/registrationController.js
const Registration = require('../models/Registration');

const registerParticipant = async (req, res) => {
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

    await newParticipant.save();
    res.status(201).json({ message: 'Participant registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  registerParticipant,
};
