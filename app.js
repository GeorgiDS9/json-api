// Require the express framework that was installed
const express = require('express');
// const bodyParser = require('body-parser'); --> deprecated

// Create an instance of express to serve the end points
const app = express();

// Require the node.js built-in file system library to serve the JSON file
const fs = require('fs');

// Body-parser is deprecated, so I used express to handle the JSON data
//  Note: Express >= 4.16.0, body parser has been re-added under the methods express.json() and express.urlencoded()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create the routes

const dataPath = './data/employees.json';

// GET/Read Data from the JSON file I created

app.get('/employees', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(JSON.parse(data));
  });
});

// Launch server and set it to listen on port 3000;
const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});