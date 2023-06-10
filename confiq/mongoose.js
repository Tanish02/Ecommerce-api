const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// connect to database

mongoose.connect('mongodb+srv://tanish:Tanish@cluster0.7cf0t.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Can't connect to MongoDb"));

// if connection is successful
db.once("open", () => {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
