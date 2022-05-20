const fs = require('fs');
const path = require('path');
const  uniqid = require('uniqid'); 

function createNewNote(body, notesArray) {
    const newNote = body;
        newNote.id = uniqid();
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    return newNote;
};

function deleteNote(id, notesArray) {
    const filteredArr = notesArray.filter( note => note.id != id);
    console.log(filteredArr);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(filteredArr, null, 2)
    );
};

module.exports = { createNewNote, deleteNote };