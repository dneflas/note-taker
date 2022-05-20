const fs = require('fs');
const path = require('path');
const  uniqid = require('uniqid'); 

function createNewNote(body, db) {
    const newNote = body;
        newNote.id = uniqid();
    db.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(db, null, 2)
    );

    return newNote;
};

module.exports = createNewNote;