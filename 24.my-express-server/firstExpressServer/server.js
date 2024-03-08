const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1> hello </h1>");
})

app.get("/contact", function(req, res){
    res.send("contact me at 0942284726");
})

app.get("/about", function(req, res) {
    res.send("<div style='text-align: center'; ><h1>HI!</h1> <h2> My name is Ajwad Elgandouz</h2> <h3> i'm a 23 years old 3rd year univ student <br> i'm curently studing fullstack web-dev from Angela yu i bought the course from udemy and its an amazing cours with great delivary and lots of rich contant</h3></div>")
})
app.listen(3000, function() {
    console.log("server started port 3000");
});


