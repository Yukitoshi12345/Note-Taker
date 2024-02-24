// Importing the file system module
const fs = require('fs');
// Importing the utility module
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile); // Promisifying the fs.readFile function

// Function to write content to a file
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>  // Writing content to the file in JSON format
    err ? console.error(err) : console.info(`\nData written to ${destination}`)  // Logging success or error message
  );

// Function to read from a file, append content to it, and write back to the file
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => { // Reading from the file
    if (err) {
      console.error(err); // Logging error if encountered
    } else {
      const parsedData = JSON.parse(data); // Parsing the existing data as JSON
      parsedData.push(content); // Appending new content
      writeToFile(file, parsedData); // Writing updated content back to the file
    }
  });
};

// Function to read from a file, delete content by idToDelete, and write back to the file
const readAndDelete = (id, file) => {
  fs.readFile(file, 'utf8', (err, data) => { // Reading from the file
    if (err) {
        console.error(err); // Logging error if encountered
    } else {
        let parsedData = JSON.parse(data); // Parsing the existing data as JSON
        parsedData = parsedData.filter(note => note.id !== id); // Filtering out the content with the specified id
        writeToFile(file, parsedData); // Writing updated content back to the file
      }
    });
  };

// Exporting functions for external use
module.exports = { readFromFile, writeToFile, readAndAppend, readAndDelete };

