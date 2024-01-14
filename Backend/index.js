const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const registrationRoutes = require('./routes/RouteRegister');
const resultRoutes = require('./routes/RouteResult');
const eventRoutes = require('./routes/RouteEvent');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const CONNECTION_STRING = "mongodb+srv://mini8681:kletu@123@cluster0.t7xh5su.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = "kletech_database";

let database;

MongoClient.connect(CONNECTION_STRING, (error, client) => {
  if (error) {
    console.error('Failed to connect to MongoDB:', error);
  } else {
    database = client.db(DATABASE_NAME);
    console.log('Connected to sports database');
  }
});

// Use registration routes
app.use('/register', registrationRoutes);
app.use('/events', eventRoutes);
app.use('/results', resultRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
