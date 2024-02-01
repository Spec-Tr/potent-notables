const express = require(`express`);
const router = express.Router();
const fs = require(`fs`);
const uniquelyIdentify = require(`generate-unique-id`);

router.get(`/notes`, (req, res) =>{
    const noteData = JSON.parse(fs.readFileSync(`./db/db.json`));
    console.log(`${req.method} request to ${req.url}`);
    res.json(noteData);
});

router.post(`/notes`, (req, res) => {
    const postNote = {
        id: uniquelyIdentify(),
        title: req.body.title,
        text: req.body.text
    };
    const storedNoteData = JSON.parse(fs.readFileSync(`./db/db.json`))
    storedNoteData.push(postNote);
    fs.writeFileSync(`./db/db.json`, JSON.stringify(storedNoteData, null, 4));
    console.log(`${req.method} request to ${req.url}`);
    res.json(postNote);
});

module.exports = router;