//initialize the express
const express = require("express");
const app = express();

//get the appliation routes
app.get("/", function (request, response) {
  response.send("This is my home route");
});

app.get("/notes", function (request, response) {
  response.send("This is my note path");
});

app.listen(5000);
