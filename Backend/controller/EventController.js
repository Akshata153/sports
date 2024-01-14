// controllers/eventController.js
const Event = require('../models/Event');

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const addEvent = async (req, res) => {
  try {
    const {
      event_name,
      club_id,
      club_name,
      domain_id,
      domain_name,
      event_description,
      date,
      venue,
    } = req.body;

    const newEvent = new Event({
      event_name,
      club_id,
      club_name,
      domain_id,
      domain_name,
      event_description,
      date,
      venue,
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    await Event.findByIdAndDelete(eventId);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const searchEventsByDate = async (req, res) => {
  try {
    const { date } = req.query;
    const events = await Event.find({ date: { $gte: new Date(date) } });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllEvents,
  addEvent,
  deleteEvent,
  searchEventsByDate,
};
