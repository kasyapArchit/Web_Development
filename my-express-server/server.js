
const express = require("express");
const app = express();

app.get("/", function (request, response) {
    response.send("<h1>Hello World</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at archit@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("I am Archit, student IIIT-B");
});

app.get("/hobbies", function (req, res) {
    res.send("<ul><li>Novels</li><li>Music</li><li>Cooking</li></ul>");
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
});