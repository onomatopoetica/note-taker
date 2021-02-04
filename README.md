# Note Taker
This application is for writing, saving, and deleting notes. It uses an Express.js backend and saves and retrieves note data from a JSON file.

![GitHub last commit](https://img.shields.io/github/last-commit/onomatopoetica/note-taker)  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/onomatopoetica/note-taker)  ![GitHub watchers](https://img.shields.io/github/watchers/onomatopoetica/note-taker?label=Watch&style=social)  ![GitHub top language](https://img.shields.io/github/languages/top/onomatopoetica/note-taker)  ![GitHub license](https://img.shields.io/badge/license-MIT-blueviolet) <br> 
    
## Project Links
[Repo Link](https://github.com/onomatopoetica/note-taker) <br>
**NOTE:** Since this application cannot be deployed on GitHub, the deployed app can be found on [Heroku](https://hidden-scrubland-60840.herokuapp.com/). Please see the **Demo** section below for an overview of its functionality and the **Getting Started** section for more information regarding installation, usage, contribution guidelines, tests and where to go for questions.
    
## Table of Contents
1. [About The Project](#About-The-Project)
1. [Project Links](#Project-Links)
1. [Demo](#Demo)
1. [Getting Started](#Getting-Started)
1. [Installation](#Installation)
1. [Usage](#Usage)
1. [Tests](#Tests)
1. [Contribution Guidelines](#Contribution-Guidelines)
1. [Questions](#Questions)
1. [Project Status](#Project-Status)
1. [License](#License)
 
## About The Project

This project scope was to create an application that can be used to write, save, and delete notes. This application uses an `Express.js` backend and saves and retrieves note data from a JSON file.

* The application frontend has already been created, this project was to build the backend and connect the two.

* The following HTML routes were created:

  * GET `/notes` - Returns the `notes.html` file.

  * GET `*` - Returns the `index.html` file

* The application has a `db.json` file on the backend that is used to store and retrieve notes using the `fs` module.

* The following API routes were created:

  * GET `/api/notes` - Reads the `db.json` file and returns all saved notes as JSON.

  * POST `/api/notes` - Receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.

  * DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete. Each note is given a unique `id` when it's saved using `uniqid npm`. In order to delete a note, all notes from the `db.json` file are read, and the note with the deleted `id` property is removed from the `db.json` file. Finally, the notes are rewritten to the `db.json` file.
  
The dependencies are [Express.js](https://expressjs.com/), for robust routing (it is a fast, unopinionated, minimalist framework for node) and [uniqid](https://www.npmjs.com/package/uniqid) for very fast generation of unique ids on multiple processes and machines even if called at the same time.

Because this application cannot be deployed on GitHub, a walkthrough video demonstrates its functionality below. The deployed app can be found on [Heroku](https://hidden-scrubland-60840.herokuapp.com/).

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Demo

#### The following is a video of the team profile generator application performance and its functionality:

[See how it works!](https://drive.google.com/placeholder)  

#### The following is a brief overview of the application in operation and rendering of the note taker app. See full video demonstration on "See how it works!" link above: 
    
<img src="https://github.com/onomatopoetica/note-taker/blob/main/assets/placeholder.GIF" alt="screenshot" title="app video" width="500" height="auto"> 

#### The following is a screenshot of the application and overview of its functionality: <br>

<img src="assets/placeholder.png" alt="app screenshot" width="1000" height="auto">

## Getting Started
    
#### Languages and libraries used in this project:
* JavaScript 
* Node.js
* Uniqid npm
* Express.js
    
#### Installation: 
```  
git clone - https://github.com/onomatopoetica/note-taker.git
```
#### Usage 
```
The application is for writing, saving, and deleting notes. It uses an Express.js backend and saves and retrieves note data from a JSON file. 
See demo video above for more information on how it works.
```
#### Tests
```
Enter command 'npm install --save express uniqid' after cloning the repo to install Express.js and uniqid npm. The application will be invoked by using nodemon
or entering the following in the command line: 'node server.js'. You will see 'App listening on PORT 3000' in the console. You can then view the app on http://localhost:3000/.
```    
#### Contribution Guidelines
```
When contributing to this repository, please first discuss the change you wish to make via issue or email with the project team. See contact details below.
```
## Questions 
#### Connect with the project team: [Onomatopoetica](https://github.com/onomatopoetica)
   
<details>
    <summary>Contact</summary>
    jendotb@gmail.com
</details>

## Project Status
<details>
    <summary>Current Project Activity</summary>
    Active
</details>
    
## License
#### Distributed under the MIT License. See `LICENSE` for more information.

##### This README was generated with :hearts:&nbsp; by [Good README Generator](https://github.com/onomatopoetica/Good-README-Generator).

