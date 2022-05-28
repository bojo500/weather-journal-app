// Setup empty JS object to act as endpoint for all routes


let projectData = {};
// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

// Start up an instance of app
const app = express()


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port =3000;
app.listen(port,listen)

function listen(){
    console.log(`The server is running at localhost:${port}`)
}

// GET method route
app.get('/projectData', (req, res) => {
    res.send(projectData)
})

// POST method route
app.post('/projectData', (req, res) => {
    projectData = req.body
    res.send({status:"the projectData has been saved"})
})
