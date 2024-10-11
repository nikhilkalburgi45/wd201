const express = require('express');
const minimist = require('minimist');
const path = require('path');

const app = express();
const args = minimist(process.argv.slice(2));
const PORT = args.port || 3000; // Default to port 3000 if no port is provided

// Serve static files from the http-server directory
app.use(express.static(path.join(__dirname)));

// Route to serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Route to serve the projects page
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
