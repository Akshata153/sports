const express = require("express");
const cors = require("cors");
//const MongoClient = require('mongodb').MongoClient;
const registrationRoutes = require("./routes/RouteRegister");
const resultRoutes = require("./routes/RouteResult");
const eventRoutes = require("./routes/RouteEvent");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");


const { MongoClient, ServerApiVersion } = require("mongodb");
//const uri ="mongodb+srv://root:root@cluster0.qbrivbz.mongodb.net/kletech_database";
//const uri="mongodb+srv://root:root@cluster0.tmvovqw.mongodb.net/?retryWrites=true&w=majority"
const uri="mongodb+srv://minip8681:kle123@cluster0.qbrivbz.mongodb.net/kletech_database"
app.use(cors());
app.use(express.json());
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

app.get('/',(req,res)=>{res.send("hii")})
app.use("/register", registrationRoutes);
app.use("/events", eventRoutes);
app.use("/results", resultRoutes);


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
});

async function run() {
  try {
    // Connect the client to the server  (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);







app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





