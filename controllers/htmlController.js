const express = require(`express`);
const router = express.Router();
const path = require(`path`);

// Show notes page
router.get(`/notes`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/notes.html`))
});

// Show index page
router.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/index.html`))
});

//Wildcard
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, `../public/index.html`))
});
module.exports = router;