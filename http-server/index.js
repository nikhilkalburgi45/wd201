const express = require('express');
const minimist = require('minimist');
const path = require('path');

const app = express();

// Use minimist to accept port as a command line argument
const args = minimist(process.argv.slice(2));
const PORT = args.port || 3000;  // Default to port 3000 if none provided

// Serve static files from the root of http-server folder
app.use(express.static(path.join(__dirname)));

// Route to serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Route to serve the project page
app.get('/project', (req, res) => {
    res.sendFile(path.join(__dirname, 'project.html'));
});

// Route to serve the registration page
app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'registration.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
