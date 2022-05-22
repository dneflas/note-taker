const router = require('express').Router();
const db = require('../../db/db.json');
const { createNewNote, deleteNote } = require('../../lib/notes');
const path = require('path');

router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    const newNote = createNewNote(req.body, db);
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, db);
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;