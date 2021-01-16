const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:  true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let items = ["Buy Food", "Cook Food", "Eat Food"];

// POST and GET functions
app.get("/", function (req, res) {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItem: items});
});

app.post("/", function (req, res) {
    items.push(req.body.newItem);
    
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server up and running at port 3000");
});