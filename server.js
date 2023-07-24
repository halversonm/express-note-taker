const express = require('express');
const path = require('path');

// Setting up router for modularizing 
const api = require('./routes')


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware 
// I need middleware for parsing JSON and urlencoded form data. do i always need both? How do i know what i need?
// app.use('/api', api); (how do i know if the route is through /api?)
app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'));
app.use(express.json())

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);