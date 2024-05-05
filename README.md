![HTML](https://img.shields.io/badge/HTML-blue) ![CSS](https://img.shields.io/badge/CSS-red) ![JavaScript](https://img.shields.io/badge/JavaScript-orange) ![Node.js](https://img.shields.io/badge/Node.js-blue) ![Express.js@4.18.2](https://img.shields.io/badge/Express.js@4.18.2-purple)

<h1 align = "center"> Note Taker </h1>

Struggling to juggle multiple tasks and fleeting ideas? As a small business owner, organisation is key. This note-taking application is designed to be your digital haven, helping you capture important thoughts and manage your to-do list with ease. Dive into clear instructions and intuitive features, allowing you to effortlessly save and access your notes whenever inspiration strikes. Let's get you started on streamlining your workflow and keeping your business on track.

## Table of Content

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Screenshot](#screenshot)
- [Video](#video)
- [Output](#output)
- [Installation](#installation)
- [Central Grader Comments](#central-grader-comments)
- [License](#license)

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organise my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
WHEN I click on the bin button associated with an existing note in the list
THEN the selected note disappears from the list and is permanently deleted
```

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js (version 4.18.2)

## Screenshot

Note taker on Heroku Application:

![](/public/assets/images/note-taker.png)

## Video

This demonstrates testing API GET, POST, and DELETE routes using Insomnia:

![](/public/assets/video/insomnia.gif)

<br>

This guide explains effective methods for capturing and managing notes within the Heroku platform:

![](/public/assets/video/note-taker.gif)

## Output

This note-taking application deployed on Heroku allows you, as a small business owner, to easily organise your thoughts and keep track of tasks. Here's how it works:

<b><u> Landing Page: </u></b>

Upon opening the application, you'll see a landing page with a clear link directing you to the note-taking section.

<b><u> Notes Page: </u></b>

Clicking the link leads you to the main notes page. Here, you'll find:

- A list of your existing notes displayed in the left-hand column.
- Empty fields on the right-hand side for creating a new note title and its content.

<b><u> Creating a New Note: </u></b>

Enter a descriptive title and the details of your note in the designated fields.

<b><u> Saving Your Note: </u></b>

Click the "Save Note" button to save your newly created note. It will then be added to the list alongside your existing notes.

<b><u> Viewing Existing Notes: </u></b>

Clicking on a note in the list displays its content in the right-hand column, allowing you to review or edit it.

<b><u> Creating a New Note After Viewing: </u></b>

Clicking the "New Note" button clears the current note display and presents you with empty fields for creating a new one.

<b><u> Deleting Notes: </u></b>

If you no longer need a note, click the "bin" button associated with it in the list. This permanently removes the selected note from the application.

<b><u> Remember: </u></b>

This deployed application on Heroku ensures your notes are readily accessible from any device with an internet connection, keeping you organised and on top of your tasks.

## Central Grader Comments

Grade: 100/100

Hello Yukitoshi, thanks for submitting this challenge! Your application is successfully deployed and loads with no errors, nice work! The application allows user to create and save persistent notes and view previously saved notes. The front-end connects to Express.js backend and the backend stores notes with unique IDs in JSON file, nice work! Awesome work on the bonus of allowing the user to delete notes. The repo includes a readme with a description, the link to the live deployed application and a screenshot. Congratulations on successfully building and deploying an application that uses express and node. Keep up the terrific work!

TY, Central grader

## Installation

The project was uploaded to [GitHub](https://github.com/) at the following repository:
[https://github.com/yukitoshi12345/Note-Taker/](https://github.com/yukitoshi12345/Note-Taker)

You can access the deployed application with Heroku:
[https://yukitoshi-note-taker-83dab30afae7.herokuapp.com/](https://yukitoshi-note-taker-83dab30afae7.herokuapp.com/)

## License

This project is licensed under the [MIT License](https://github.com/Yukitoshi12345/Note-Taker/blob/main/LICENSE).
