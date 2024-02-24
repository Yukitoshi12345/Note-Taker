// Importing the Express router
const router = require('express').Router();
// Importing the UUID generator
const uuid = require("../helpers/uuid");
// Importing file system utility functions
const { readAndAppend, readFromFile, readAndDelete } = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
router.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting notes
router.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNotes = {
      title,
      text,
      id: uuid(),
    };

    // Appending new note to file
    readAndAppend(newNotes, './db/db.json');

    res.json(newNotes); // Sending success response
  } else {
    res.json('Error in adding notes'); // Sending error response
  }
});

// DELETE Route for deleting a note by id
router.delete('/:id', (req, res) => {
    readAndDelete(req.params.id, "./db/db.json"); // Deleting note from file
    res.json('response'); // Sending response
});

// Exporting router for use in other files
module.exports = router;
