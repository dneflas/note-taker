const express = require('express');
const path = require('path');
const [ db ] = require('./db/db.json');
const fs = require('fs');
const { send } = require('process');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// html routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// api routes
// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => {
    res.send('get notes is working');
});
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, 
//and then return the new note to the client. You'll need to find a way to give each note a unique id 
//when it's saved (look into npm packages that could do this for you).
app.post('/api/notes', (req, res) => {
    res.send('post notes is working');
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}, http://localhost:${PORT}`);
});