const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    var num1 = +req.body.num1;
    var num2 = +req.body.num2;
    var result = num1 + num2; 
    res.send("the resaut of the calculation is : " + result);
})

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
})

app.post("/bmicalculator", function(req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var bmi = weight / Math.pow(height, 2);

    res.send("Your BMI is " + bmi.toFixed(2));
})

app.listen(3000, function() {
    console.log("server started port 3000");
});

