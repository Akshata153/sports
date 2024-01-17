// src/components/Result.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Result = ({ Keyprop }) => {
  const [results, setResults] = useState([]);
  const [newResult, setNewResult] = useState({
    event_name: '',
    winner: '',
    runner_up: '',
  });

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await axios.get('http://localhost:3000/results/all');
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching results:', error.message);
    }
  };

  const handleAddResult = async () => {
    try {
      await axios.post('http://localhost:3000/results/add', newResult);
      setNewResult({
        event_name: '',
        winner: '',
        runner_up: '',
      });
      fetchResults();
    } catch (error) {
      console.error('Error adding result:', error.message);
    }
  };

  const handleDeleteResult = async (eventName) => {
    try {
      await axios.delete(`/results/${eventName}`);
      fetchResults();
    } catch (error) {
      console.error('Error deleting result:', error.message);
    }
  };

  return (
    <div>
      <h1>Results</h1>
      {Keyprop === 1 && (
        <div >
          <h2>Add Result</h2>
          <div className='registration-container'>
          <form>
            <label>
              Event Name:
              <input
                type="text"
                value={newResult.event_name}
                onChange={(e) => setNewResult({ ...newResult, event_name: e.target.value })}
              />
            </label>
            <br />

            <label>
              Winner:
              <input
                type="text"
                value={newResult.winner}
                onChange={(e) => setNewResult({ ...newResult, winner: e.target.value })}
              />
            </label>
            <br />

            <label>
              Runner-up:
              <input
                type="text"
                value={newResult.runner_up}
                onChange={(e) => setNewResult({ ...newResult, runner_up: e.target.value })}
              />
            </label>
            <br />

            <button type="button" onClick={handleAddResult}>
              Add Result
            </button>
          </form>
        </div>
          <h2>All Results</h2>
          <ul>
            {results.map((result) => (
              <li key={result._id}>
                {result.event_name} - Winner: {result.winner}, Runner-up: {result.runner_up}{' '}
                <button type="button" onClick={() => handleDeleteResult(result.event_name)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <h2>All Results</h2>
      <ul>
        {results.map((result) => (
          <li key={result._id}>
            {result.event_name} - Winner: {result.winner}, Runner-up: {result.runner_up}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;