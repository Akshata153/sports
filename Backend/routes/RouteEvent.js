// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controller/EventController');

// API endpoint to get all events
router.get('/all', eventController.getAllEvents);

// API endpoint to add an event
router.post('/add', eventController.addEvent);

// API endpoint to delete an event
router.delete('/:id', eventController.deleteEvent);

// API endpoint to search events by date
router.get('/search', eventController.searchEventsByDate);
router.get('/',(req,res)=>{res.send("schedule")});
module.exports = router;
