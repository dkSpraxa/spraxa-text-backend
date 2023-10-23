const express = require("express");
const { createNote, notesUpdate, notesDelete, getAllNotes } = require("../controllers/notes");

const router = express.Router()

router.route("/note/create").post(createNote)
router.route("/notes").get(getAllNotes)
router.route("/note/update/:id").put(notesUpdate)
router.route("/note/delete/:id").delete(notesDelete)

module.exports = router;
