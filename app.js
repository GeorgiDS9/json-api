// require install packages (express framework and body-parser helper)
const express = require('express');
const bodyParser = require('body-parser');

// create an instance of express to serve the end points
const app = express();

// require the built-in file system library to serve the JSON file
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));