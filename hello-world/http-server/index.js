const express = require('express');
const path = require('path');
const minimist = require('minimist');

const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 3000; // Default to port 3000 if no port is provided

// Serve registration.html on /registration route
app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'registration.html'));
});

// Serve project.html on root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'project.html'));
});

// Serve home.html on /home route
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
