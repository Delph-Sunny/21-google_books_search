const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;  // Setting up port
const app = express();  // Creating express app

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => console.log("   ***** MongoDB Connected *****"))
  .catch(err => console.log(err));


// Start the API server
app.listen(PORT, () => {
  console.log(`
  🌎 ==> API server now on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.
  `);
});
