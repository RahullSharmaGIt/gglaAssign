const express=require("express");
const { getAllNotes, createNote, updateNote, deleteNote } = require("../controller/notes.controller");
const router=express.Router();

router.get("/notes",getAllNotes);
router.post("/note",createNote);
router.put("/note/:id",updateNote);
router.delete("/note/:id",deleteNote);


module.exports=router;