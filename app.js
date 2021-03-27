// require install packages (express framework and body-parser helper)
const express = require('express');
const bodyParser = require('body-parser');

// create an instance of express to serve the end points
const app = express();

// require the node.js built-in file system library to serve the JSON file
const fs = require('fs');

// body-parser is deprecated, so I used express to handle the JSON data
//  Note: Express >= 4.16.0, body parser has been re-added under the methods express.json() and express.urlencoded()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

