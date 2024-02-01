const express = require(`express`);
const router = express.Router();
const path = require(`path`);

//Request for homepage
router.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/index.html`));
});

//Request for notes page
router.get(`/notes`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/notes.html`));
});

//Request for *wildcard*
router.get(`*`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/index.html`));
});

module.exports = router;