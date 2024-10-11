const express = require("express");
const path = require("path");
const minimist = require("minimist");

const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 3000;

app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "registration.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "project.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
