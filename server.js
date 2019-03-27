const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
//if (process.env.NODE_ENV === "production") {
 // app.use(express.static("client/build"));
//}

// Define API routes here
app.use(routes);


/******************************************************** */
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://user:pass123@booksearch-6zwii.mongodb.net/test?retryWrites=true"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   //const collection = client.db("GoogleBookSearch").collection("googlebooksearcg");
   // perform actions on the collection object
  // client.close();
});

//************************************************ */
//require("dotenv").load();
//mongoose.connect(process.env.MONGO_URI|| process.env.LOCAL_MONGO_URI, {
//  useNewUrlParser: true
//}); // Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
