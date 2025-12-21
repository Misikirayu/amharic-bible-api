const express = require("express");
const router = express.Router();
const controller = require("../controllers/bible.controller");

router.get("/books", controller.listBooks);
router.get("/books/:book/chapters", controller.getChapters);
router.get("/books/:book/chapters/:chapter", controller.getChapter);
router.get("/books/:book/chapters/:chapter/:verse", controller.getVerse);

module.exports = router;
