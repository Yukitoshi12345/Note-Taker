const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


// HTML routes

// TODO: Add get routes for notes.html and index.html


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);