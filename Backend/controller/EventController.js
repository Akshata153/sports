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
    const eventName = req.params.id;
    //await Event.findByIdAndDelete(eventName);
    await Event.deleteOne({ event_name: eventName });
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const searchEventsByDate = async (req, res) => {
  try {
    const { date } = req.query;
    let s = date.split("-")
    //console.log(date,"date");
    let date2 = new Date(Date.UTC(s[0], s[1] - 1, s[2]));
    const events = await Event.find({ date: { $gte: date2, $lte: date2 } });
    console.log(events);
    if(events == []){
      res.status(200).json({ message:"not found"});
    }
    // console.log(events)
    res.status(200).json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};






module.exports = {
  getAllEvents,
  addEvent,
  deleteEvent,
  searchEventsByDate,
};
