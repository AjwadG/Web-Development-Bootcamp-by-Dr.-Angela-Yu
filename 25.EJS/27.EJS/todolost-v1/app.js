const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.use(express.static("public"))

const items = ["Wake up", "Eat", "Study"];
const work = [];



app.get("/", function(req, res){

    const today = date.getDate();

 
    res.render("list", {listTitle: today, items: items});

})


app.post("/", function(req, res){

    if (req.body.list == "Work List"){
        work.push(req.body.newToDO); 
        res.redirect("/work");
    } else {
        items.push(req.body.newToDO); 
        res.redirect("/");
    }
 
})

//////////////////////////////////////
app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List",items: work });
})


app.get("/about", function(req,res){
    res.render("about");
})


app.listen(3000, function(){
    console.log("server started on port 3000");
})