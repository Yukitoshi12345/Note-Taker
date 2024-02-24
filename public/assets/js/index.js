// Declare variables for key elements
let noteForm;
let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

// If on the notes page, select elements for interaction
if (window.location.pathname === '/notes') {
  // Select form elements, buttons, and list container
  noteForm = document.querySelector('.note-form');
  noteTitle = document.querySelector('.note-title');
  noteText = document.querySelector('.note-textarea');
  saveNoteBtn = document.querySelector('.save-note');
  newNoteBtn = document.querySelector('.new-note');
  clearBtn = document.querySelector('.clear-btn');
  noteList = document.querySelectorAll('.list-container .list-group');
}

// Helper functions for toggling element visibility

// Show an element
const show = (elem) => {
  elem.style.display = 'inline';
};

// Hide an element
const hide = (elem) => {
  elem.style.display = 'none';
};

// activeNote is used to keep track of the note in the textarea

// Variable to track the currently active note
let activeNote = {};

// Functions for interacting with the notes API


// **Function:** getNotes
// Purpose: Fetches all notes from the API endpoint "/api/notes"
// Returns: Promise object resolving to the fetched notes data
const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json' // Specify JSON data type in request
    }
  });


// **Function:** saveNote
// Purpose: Saves a new note to the API endpoint "/api/notes"
// Parameters: note object containing the note data
// Returns: Promise object resolving to the saved note data
const saveNote = (note) =>
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Specify JSON data type in request
    },
    body: JSON.stringify(note)
  });

// **Function:** deleteNote
// Purpose: Deletes a note from the API endpoint "/api/notes/:id"
// Parameters: id (number) of the note to delete
// Returns: Promise object resolving to the deletion response
const deleteNote = (id) =>
  fetch(`/api/notes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json' // Specify JSON data type in request
    }
  });

// Function to display the active note in the form
const renderActiveNote = () => {
  hide(saveNoteBtn); // Initially hide save and clear buttons
  hide(clearBtn); 

  if (activeNote.id) { // If viewing an existing note
    show(newNoteBtn); // Show the button to create a new note
    noteTitle.setAttribute('readonly', true); // Make title and text read-only
    noteText.setAttribute('readonly', true);
    noteTitle.value = activeNote.title; // Fill in title and text with note data
    noteText.value = activeNote.text;
  } else { // If creating a new note
    hide(newNoteBtn); // Hide the new note button
    noteTitle.removeAttribute('readonly'); // Make title and text editable
    noteText.removeAttribute('readonly');
    noteTitle.value = ''; // Clear title and text fields
    noteText.value = '';
  }
};

// Function to handle saving a new note
const handleNoteSave = () => {
  const newNote = {
    title: noteTitle.value,
    text: noteText.value
  };
  saveNote(newNote).then(() => {
    getAndRenderNotes(); // Update note list after saving
    renderActiveNote(); // Clear form
  });
};

// Delete the clicked note
// Function to handle deleting a note
const handleNoteDelete = (e) => {
  // Prevents the click listener for the list from being called when the button inside of it is clicked
  e.stopPropagation(); // Prevent click event from propagating to parent list

  // Store a reference to the element that triggered the event (likely a note list item)
  const note = e.target;
  // Extract the note ID from the data-note attribute of the parent element
  const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;

  if (activeNote.id === noteId) { // Clear active note if deleted
    activeNote = {};
  }

  deleteNote(noteId).then(() => {
    getAndRenderNotes(); // Update note list after deletion
    renderActiveNote(); // Clear form
  });
};

// Sets the activeNote and displays it
// Clear active note if deleted
const handleNoteView = (e) => {
  e.preventDefault(); // Prevent click event from propagating to parent list
  activeNote = JSON.parse(e.target.parentElement.getAttribute('data-note'));
  renderActiveNote(); // Display selected note
};

// Sets the activeNote to and empty object and allows the user to enter a new note
const handleNewNoteView = (e) => {
  // Set active note to an empty object to represent a new note
  activeNote = {};
  // Show the clear button to allow clearing the new note
  show(clearBtn);
  // Render the active note to update the UI
  renderActiveNote();
};

// Renders the appropriate buttons based on the state of the form
const handleRenderBtns = () => {
  // Show the clear button initially
  show(clearBtn);

  // Check if both title and text fields are empty
  if (!noteTitle.value.trim() && !noteText.value.trim()) {
    // Hide the save button if both fields are empty, indicating no changes
    hide(clearBtn);
    // Check if either title or text field is empty
  } else if (!noteTitle.value.trim() || !noteText.value.trim()) {
    // Hide the save button if either field is empty, as saving requires both
    hide(saveNoteBtn);
  } else {
    // Show the save button if both fields have content, indicating changes
    show(saveNoteBtn);
  }
};

// Render the list of note titles
const renderNoteList = async (notes) => {
  // Convert the promise to JSON to access note data
  let jsonNotes = await notes.json();
  // Check if we're on the notes page to avoid unnecessary updates
  if (window.location.pathname === '/notes') {
    // Clear the existing list content
    noteList.forEach((el) => (el.innerHTML = ''));
  }

  // Create an empty array to store note list items
  let noteListItems = [];

  // Returns HTML element with or without a delete button
  const createLi = (text, delBtn = true) => {
    // Create a new list item element
    const liEl = document.createElement('li');
    // Add the "list-group-item" class for styling
    liEl.classList.add('list-group-item');

    // Create a span element for the note title
    const spanEl = document.createElement('span');
    // Add the "list-item-title" class for styling
    spanEl.classList.add('list-item-title');
    // Set the text content of the span to the note title
    spanEl.innerText = text;
    // Add a click event listener to the span to handle note viewing
    spanEl.addEventListener('click', handleNoteView);

    // Append the span element to the list item
    liEl.append(spanEl);

    // Check if a delete button is needed
    if (delBtn) {
      // Create a font awesome icon element for the delete button
      const delBtnEl = document.createElement('i');
      // Add various classes for styling and functionality
      delBtnEl.classList.add(
        'fas',
        'fa-trash-alt',
        'float-right',
        'text-danger',
        'delete-note'
      );
      // Add a click event listener to the button to handle note deletion
      delBtnEl.addEventListener('click', handleNoteDelete);

      // Append the delete button to the list item
      liEl.append(delBtnEl);
    }

    // Return the created list item element
    return liEl;
  };

  // Check if there are no notes to display
  if (jsonNotes.length === 0) {
    // Create a list item indicating no saved notes
    noteListItems.push(createLi('No saved Notes', false));
  }

  // Loop through each note in the JSON data
  jsonNotes.forEach((note) => {
    // Create a list item element for the note
    const li = createLi(note.title); // Call createLi function to create the list item
    // Store the entire note data as a JSON string in a custom data attribute
    li.dataset.note = JSON.stringify(note);

    // Add the created list item to the noteListItems array
    noteListItems.push(li);
  });

  // Check if we're on the notes page to avoid unnecessary updates
  if (window.location.pathname === '/notes') {
    // Iterate through the noteListItems array
    noteListItems.forEach((note) => noteList[0].append(note)); // Append each note list item to the first noteList element
  }
};

// Gets notes from the db and renders them to the sidebar
// Function to fetch notes and render the list
const getAndRenderNotes = () => getNotes().then(renderNoteList);

// Event listeners for buttons and form input
if (window.location.pathname === '/notes') {
  saveNoteBtn.addEventListener('click', handleNoteSave);
  newNoteBtn.addEventListener('click', handleNewNoteView);
  clearBtn.addEventListener('click', renderActiveNote);
  noteForm.addEventListener('input', handleRenderBtns);
}

// Initiate the note fetching and rendering process
getAndRenderNotes();
