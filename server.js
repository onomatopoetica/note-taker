// Dependencies
var express = require("express");
const fs = require("fs");
const path = require("path");
var uniqid = require("uniqid");
// const routes = require("./routes/routes");
// Require routes.js file
// const require = ("./routes/routes.js")(app);
// Set up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use("/api", routes);

function getAllNotes() {
    const data = fs.readFileSync(path.join(__dirname, "db/db.json"), "utf8");
    return JSON.parse(data);
}

app.get("/api/notes", function (req, res) {
    console.log("Welcome to the Note Taker App!")
    // TODO: Get the current notes from the database
    const notes = getAllNotes();
    res.json(notes);
});

app.post("/api/notes", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // TODO: make sure this note has a unique id. There are NPM packages that can do this. Google "node unique id"
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid()
    }

    // TODO: Load all the notes from the db into an array
    const notes = getAllNotes();

    // TODO: Add the new note
    notes.push(newNote)

    // TODO: Save the notes array back to the db file
    fs.writeFile(path.join(__dirname, "db/db.json"), JSON.stringify(notes), err => {
        if (err) throw err;
        res.json(newNote);
    });

});

// Setting up api/notes delete with id to delete a specific note
app.delete("/api/notes/:id", function (req, res) {

    var noteId = req.params.id;

    // TODO: Find this note in my current notes from the db file and delete it.
    // TODO: Load all the notes from the db into an array
    const notes = getAllNotes();

    // TODO: Write the new array to a the file.
    fs.writeFile(path.join(__dirname, "db/db.json"), JSON.stringify(notes), err => {
        if (err) throw err;
        res.json(true);
    });

    res.send();
});


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