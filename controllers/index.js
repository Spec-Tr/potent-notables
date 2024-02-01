const express = require("express");
const router = express.Router();

const htmlRoutes = require("./htmlController.js")
router.use(htmlRoutes);

const dbRoutes = require("./databaseController.js")
router.use(dbRoutes);

module.exports = router;