// RegistrationForm.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./Registration.css";

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

  const validateForm = () => {
    // Basic validation - check if required fields are filled
    if (
      formData.event_name.trim() === '' ||
      formData.name.trim() === '' ||
      formData.usn.trim() === '' ||
      formData.contact.trim() === '' ||
      formData.email.trim() === ''
    ) {
      alert('Please fill in all required fields');
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Invalid email address');
      return false;
    }

    // Validate USN length
    if (formData.usn.length !== 12) {
      alert('USN must be 12 characters long');
      return false;
    }

    // Validate contact length
    if (formData.contact.length !== 10) {
      alert('Contact must be 10 characters long');
      return false;
    }

    // Add more validation as needed

    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      console.log('entering to ')
      await axios.post('http://localhost:3000/register/add', formData);
      alert('Submitted successfully')
      console.log('Participant registered successfully');
      // You can redirect the user or show a success message here
    } catch (error) {
      console.error('Registration failed', error.message);
      console.error('Full error object:', error);
      // Handle error, show error message to the user, etc.
       // Check if the error response contains validation errors
    
      {/*
       if (error.response && error.response.data && error.response.data.error) {
        const validationErrors = error.response.data.error;
        
        // Display validation errors to the user
        Object.keys(validationErrors).forEach(field => {
          alert(`Validation Error: ${field} - ${validationErrors[field]}`);
        });
      } else {
        // Handle other errors
        // You might want to display a generic error message to the user
        alert('An error occurred during registration. Please try again later.');
      }*/}
      
    }
  };

  return (
    <div>
      <h1>Participant Registration</h1>
      <form onSubmit={handleSubmit}>
      <div className='registration-container'>
        <label>
          Event Name:
          <input type="text" name="event_name" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Domain ID:
          <input type="text" name="domain_id" onChange={handleChange} value="1" />
        </label>
        <br />
        <label>
          Domain Name:
          <input type="text" name="domain_name" onChange={handleChange} value="CSE"/>
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
          <input type="text" name="contact" onChange={handleChange} required/>
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;