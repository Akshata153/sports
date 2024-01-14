// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    event_name: '',
    domain_id: '',
    domain_name: '',
    name: '',
    usn: '',
    contact: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/register', formData);
      console.log('Participant registered successfully');
      // You can redirect the user or show a success message here
    } catch (error) {
      console.error('Registration failed', error.message);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <div>
      <h1>Participant Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" name="event_name" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Domain ID:
          <input type="text" name="domain_id" onChange={handleChange} />
        </label>
        <br />
        <label>
          Domain Name:
          <input type="text" name="domain_name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} required />
        </label>
        <br />
        <label>
          USN:
          <input type="text" name="usn" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Contact:
          <input type="text" name="contact" onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
