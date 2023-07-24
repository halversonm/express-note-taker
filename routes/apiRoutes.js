const router = require("express").Router()
const { v4: uuidv4 } = require("uuid")
const { readFromFile, readAndAppend, readAndDelete } = require("../utils/helper")


router.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then((data) => {
        res.json(JSON.parse(data))
    })
})

router.post("/notes", (req, res) => {
    const noteToCreate = { 
        title: req.body.title, 
        text: req.body.text, 
        id: uuidv4() 
    }

    readAndAppend(noteToCreate, "./db/db.json");
    res.json(noteToCreate)
})

router.delete("/notes/:id", (req, res) => {
    readAndDelete(req.params.id, "./db/db.json");
    res.json({ok: true})
})

module.exports = router;