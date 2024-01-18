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
      await axios.delete(`http://localhost:3000/results/${eventName}`);
      fetchResults();
    } catch (error) {
      console.error('Error deleting result:', error.message);
    }
  };

  return (
    <div>
      <h1 classname="display-4">Results</h1>
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
                <table style={{ width: '60%' }} className='center'>
                <tr><th>{result.event_name}</th> </tr>
            <tr>Winner:{result.winner}</tr>
            <tr>Runner:{result.runner_up}</tr>
                
                <button type="button" onClick={() => handleDeleteResult(result.event_name)}>
                  Delete
                </button>
                </table>
              </li>
            ))}
          </ul>
          <br></br><hr></hr><br></br>
        </div>
      )}

      <h2>All Results</h2>
      <ul>
      <table class="table table-striped-columns">
              <thead>
            <tr>
              <th>Resultname</th>
              <th>Winner</th>
              <th>Runner</th> 
            </tr>
            </thead>
            <tbody>
        {results.map((result) => (

          <tr key={result._id}>
            <td>{result.event_name} </td>
            <td>{result.winner}</td>
            <td>{result.runner_up}</td>
          </tr>
        ))}
        </tbody>
            </table>
      </ul>
    </div>
  );
};

export default Result;