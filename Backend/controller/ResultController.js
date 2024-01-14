const Result = require('../models/Result');

const resultController = {
  getAllResults: async (req, res) => {
    try {
      const results = await Result.find();
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addResult: async (req, res) => {
    try {
      const { event_name, winner, runner_up } = req.body;
      const newResult = new Result({ event_name, winner, runner_up });
      await newResult.save();
      res.json('Result added successfully');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteResult: async (req, res) => {
    try {
      const eventName = req.params.eventName;
      await Result.deleteOne({ event_name: eventName });
      res.json('Result deleted successfully');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = resultController;
