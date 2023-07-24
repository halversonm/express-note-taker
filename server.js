const express = require('express');

// Setting up router for modularizing 
const api = require('./routes/index')


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware 
// I need middleware for parsing JSON and urlencoded form data. do i always need both? How do i know what i need?
// app.use('/api', api); (how do i know if the route is through /api?)
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// do i need this:
// app.listen(PORT, () =>
//   console.log(`App listening at http://localhost:${PORT} 🚀`)
// );