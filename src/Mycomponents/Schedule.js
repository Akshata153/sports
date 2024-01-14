// components/Schedule.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Schedule = ({ keyProp }) => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    event_name: '',
    club_id: '',
    club_name: '',
    domain_id: '',
    domain_name: '',
    event_description: '',
    date: '',
    venue: '',
  });
  const [searchDate, setSearchDate] = useState('');
  const [searchedEvents, setSearchedEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/events');
      // Filter events based on club_id
      const filteredEvents = response.data.filter((event) => event.club_id === '5');
      setEvents(filteredEvents);
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  };
  

  const handleAddEvent = async () => {
    try {
      await axios.post('/events', newEvent);
      setNewEvent({
        event_name: '',
        club_id: '',
        club_name: '',
        domain_id: '',
        domain_name: '',
        event_description: '',
        date: '',
        venue: '',
      });
      fetchEvents();
    } catch (error) {
      console.error('Error adding event:', error.message);
    }
  };

  const handleDeleteEvent = async (eventName) => {
    try {
      await axios.delete(`/events/${eventName}`);
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error.message);
    }
  };

  const handleSearchByDate = async () => {
    try {
      const response = await axios.get(`/events/search?date=${searchDate}`);
      // Filter searched events based on club_id
      const filteredSearchedEvents = response.data.filter((event) => event.club_id === '5');
      setSearchedEvents(filteredSearchedEvents);
    } catch (error) {
      console.error('Error searching events by date:', error.message);
    }
  };

  return (
    <div>
      <h1>Schedule</h1>
        keyprop=1;
      {keyProp == 1 && (
        <div>
          <h2>Add Event</h2>
          <form>
            
            {/* Add input fields for each event property */}
            <label>
              Event Name:
              <input
                type="text"
                value={newEvent.event_name}
                onChange={(e) => setNewEvent({ ...newEvent, event_name: e.target.value })}
              />
            </label>
            <br />

            <label>
              Club ID:
              <input
                type="text"
                value={newEvent.club_id}
                onChange={(e) => setNewEvent({ ...newEvent, club_id: e.target.value })}
              />
            </label>
            <br />

            <label>
              Club Name:
              <input
                type="text"
                value={newEvent.club_name}
                onChange={(e) => setNewEvent({ ...newEvent, club_name: e.target.value })}
              />
            </label>
            <br />

            <label>
              Domain ID:
              <input
                type="text"
                value={newEvent.domain_id}
                onChange={(e) => setNewEvent({ ...newEvent, domain_id: e.target.value })}
              />
            </label>
            <br />

            <label>
              Domain Name:
              <input
                type="text"
                value={newEvent.domain_name}
                onChange={(e) => setNewEvent({ ...newEvent, domain_name: e.target.value })}
              />
            </label>
            <br />

            <label>
              Event Description:
              <input
                type="text"
                value={newEvent.event_description}
                onChange={(e) => setNewEvent({ ...newEvent, event_description: e.target.value })}
              />
            </label>
            <br />

            <label>
              Date:
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
            </label>
            <br />

            <label>
              Venue:
              <input
                type="text"
                value={newEvent.venue}
                onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
              />
            </label>
            <br />

            
            <button type="button" onClick={handleAddEvent}>
              Add Event
            </button>
          </form>

          <h2>All Events</h2>
          <ul>
            {events.map((event) => (
              <li key={event._id}>
                {event.event_name} - {event.date}{' '}
                <button type="button" onClick={() => handleDeleteEvent(event.event_name)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <h2>Search Events by Date</h2>
      <div>
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
        <button type="button" onClick={handleSearchByDate}>
          Search
        </button>
      </div>

      <div>
        <h2>All Events</h2>
        <ul>
          {events.map((event) => (
            <li key={event._id}>
              {event.event_name} - {event.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
