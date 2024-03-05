// Import the Express.js framework
const express = require("express");
// Import the path module for working with file paths
const path = require("path");
// Import the custom cLog middleware from the middleware/clog.js file
const { clog } = require("./middleware/clog.js");
// Import routes from the routes/index.js file
const api = require("./routes/index.js");

// Set the port for the application, using a value from the environment variable PORT if available, or defaulting to 3001
const PORT = process.env.PORT || 3001;

// Create an instance of the Express application
const app = express();

// Import custom middleware, "clog"
// Apply the custom clog middleware to log request details
app.use(clog);

// Parse incoming JSON data
app.use(express.json());
// Parse incoming URL-encoded data
app.use(express.urlencoded({ extended: true }));
// Mount the API routes defined in routes/index.js under the path /api
app.use("/api", api);

// Serve static files from the public directory
app.use(express.static("public"));

// GET Route for notes page
// Define a GET route for the notes page, serving the notes.html file
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// GET Route for home page
// Define a catch-all GET route for the home page, serving the index.html file
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/pages/index.html"))
);

// Start the Express server and listen on the specified port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
