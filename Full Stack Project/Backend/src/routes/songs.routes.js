const express = require("express");
const { createSong, allSongs } = require("../controller/songs.controller");
const multer = require("multer");
const router = express.Router()

const storage = multer({
    storage: multer.memoryStorage(),
    limits: {
        files: 20,
        fileSize: 20 * 1024 * 1024
    }
})

router.post("/song",storage.array("audioFile"), createSong);
router.get("/songs", allSongs);

module.exports = router