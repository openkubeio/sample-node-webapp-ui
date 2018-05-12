const PORT = 8080 ;

//unused...not required
const CONTEXT_PATH='dist' ;

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = express.Router();
// Usings Parsers
var urlencoded_body_parser = bodyParser.urlencoded({
  extended: true
});
app.use(bodyParser.json());
app.use(urlencoded_body_parser);
router.use(bodyParser.urlencoded({ extended: true }));
//Using router
app.use('/', router);


// Angular DIST output folder
app.use(express.static(path.join(__dirname, CONTEXT_PATH)));

// Send all other requests to the Angular app
app.get('*',(req,res) => {
console.log('request url : '+ req.url);
    res.sendFile(path.join(__dirname,req.url))
});

//start server
app.listen(PORT, "0.0.0.0", function () {
    // print a message when the server starts listening
    console.log("application running on port: " + PORT);
});

