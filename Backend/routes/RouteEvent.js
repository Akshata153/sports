// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controller/EventController');

// API endpoint to get all events
router.get('/events', eventController.getAllEvents);

// API endpoint to add an event
router.post('/events', eventController.addEvent);

// API endpoint to delete an event
router.delete('/events/:id', eventController.deleteEvent);

// API endpoint to search events by date
router.get('/events/search', eventController.searchEventsByDate);

module.exports = router;
