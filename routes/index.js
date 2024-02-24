// Import the Router object from Express
const router = require('express').Router();

// Import the notes router from the notes.js file
const notesRouter = require('./notes');

// Mount the notes router at the '/notes' path
router.use('/notes', notesRouter);
 
// Export the router object to be used in the main application
module.exports = router;
