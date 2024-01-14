// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  event_name: { type: String, required: true },
  club_id: { type: Number },
  club_name: { type: String },
  domain_id: { type: Number },
  domain_name: { type: String },
  event_description: { type: String },
  date: { type: Date },
  venue: { type: String },
});

const Event = mongoose.model('Event_registration', eventSchema);

module.exports = Event;
