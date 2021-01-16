const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:  true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

// POST and GET functions
app.get("/", function (req, res) {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {listTitle: day, newListItem: items});
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", {listTitle: "Work List", newListItem: workItems});
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);

    res.redirect("/work");
})

app.listen(3000, function () {
    console.log("Server up and running at port 3000");
});