const router = require('express').Router();
const [ db ] = require('../../db/db.json');


// api routes
// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    res.send('get notes is working');
});
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, 
//and then return the new note to the client. You'll need to find a way to give each note a unique id 
//when it's saved (look into npm packages that could do this for you).
router.post('/notes', (req, res) => {
    res.send('post notes is working');
});

module.exports = router;