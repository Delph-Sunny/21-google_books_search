const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;  // Setting up port
const app = express();  // Creating express app
const http = require("http");
const socketIO = require("socket.io");

// our server instance
const server = http.createServer(app);
// This creates our socket using the instance of the server
const io = socketIO(server);
// This is what the socket.io syntax is like, we will work this later
io.on("connection", socket => {
  console.log("New client connected")  
  // just like on the client side, we have a socket.on method that takes a callback function
  socket.on("message", (msg) => {
    // once we get a "message" event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log("Check if this is: ", msg)
    io.sockets.emit("message", msg)
  })
  // disconnect is fired when a client leaves the server
  socket.on("disconnect", () => {
    console.log("user disconnected")
  })
})

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => console.log("   ***** MongoDB Connected *****"))
  .catch(err => console.log(err));


// Start the API server
server.listen(PORT, () => {
  console.log(`
  🌎 ==> API server now on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.
  `);
});
