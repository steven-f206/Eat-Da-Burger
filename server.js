// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of the express app.
var app = express();

// Added so body parser can handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Host Static Files so css and js files can be retrieved
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 9090;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data

var icecreams = [
    { name: 'vanilla', price: 10, awesomeness: 3 },
    { name: 'chocolate', price: 4, awesomeness: 8 },
    { name: 'banana', price: 1, awesomeness: 1 },
    { name: 'greentea', price: 5, awesomeness: 7 },
    { name: 'jawbreakers', price: 6, awesomeness: 2 },
    { name: "pistachio", price: 11, awesomeness: 15 }
];

// Routes
app.get("/", function (req, res) {
    res.render("index", {
        foods: icecreams,
        eater: "Andy"
    });
});


//Handling requests

/*  POST REQUEST */
app.post('/api/test', (req, res) => {
    console.log(req.body);
    res.send('200');
});

// End of request Handling


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
