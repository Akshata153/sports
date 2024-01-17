const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  event_name: { type: String, required: true },
  winner: { type: String, required: true },
  runner_up: { type: String, required: true },
});

const Result = mongoose.model('event_result', resultSchema);

module.exports = Result;
