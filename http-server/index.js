// index.js
const express = require('express');
const minimist = require('minimist');
const path = require('path');

const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 3000; // Default port 3000

// Serve static files
app.use(express.static(path.join(__dirname)));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Project route
app.get('/project', (req, res) => {
    res.sendFile(path.join(__dirname, 'project.html'));
});

// Registration route
app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'registration.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
