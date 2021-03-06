// Dependencies
var express = require("express");
const fs = require("fs");
const path = require("path");
// Uniqid is a hexatridecimal ID generator + creates unique ids based on current time, process + machine name
var uniqid = require("uniqid");
// Set up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

function getAllNotes() {
    const data = fs.readFileSync(path.join(__dirname, "db/db.json"), "utf8");
    // console.log(data);
    return JSON.parse(data);
}

app.get("/api/notes", function (req, res) {
    console.log("Welcome to the Note Taker App!")
    // Getting the current notes from the database
    const notes = getAllNotes();
    res.json(notes);
});

app.post("/api/notes", function (req, res) {
    // The req.body object allows access to data in a string or JSON object from the client side
    // Made sure this note has a unique id using uniqid npm
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid()
    }

    // Loading all the notes from the db into an array
    const notes = getAllNotes();

    // Adding the new note
    notes.push(newNote)

    // Saving the notes array back to the db file
    fs.writeFile(path.join(__dirname, "db/db.json"), JSON.stringify(notes), err => {
        if (err) throw err;
        res.json(newNote);
    });

});

// Setting up api/notes delete with id to delete a specific note
// Find note in the db file and delete it by filtering through notes remaining after delete button pressed
app.delete("/api/notes/:id", function (req, res) {
    // The req.params property is an object containing properties mapped to the named route “parameters”
    var noteId = req.params.id;
    // Load all the notes from the db into an array
    const notes = getAllNotes();
    console.log(notes);
    // Finding the notes that are REMAINING after note deletion
    var filterNotes = notes.filter(note => note.id !== noteId);
    console.log(filterNotes);

    // Write the new array to the file
    fs.writeFile(path.join(__dirname, "db/db.json"), JSON.stringify(filterNotes), err => {
        if (err) throw err;
        res.json(filterNotes);
    });
});

// Display notes.html when /notes is requested 
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Display index.html when any other route is requested 
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Starts the server to begin listening - effectively "starts" the server
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});