const router = require("express").Router()
const { v4: uuidv4 } = require("uuid")
const {readFromFile, writeToFile, readAndAppend, readAndDelete } = require("../utils/helper")


router.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then((data) => {
        res.json(JSON.parse(data))
    })
})

router.post("/notes", (req, res) => {
       
})

router.delete("/notes/:id", (req, res) => {
    
})

module.exports = router;