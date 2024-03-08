const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { log } = require("console");
const _ = require("lodash");

const app = express();


app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.use(express.static("public"))


main().catch(err => console.log(err));
async function main(){
    await mongoose.connect("mongodb+srv://AjwadG:PIF9RnDFt82uuYJm@cluster0.0ge3uap.mongodb.net/todolistDB");
    const itemSchema = new mongoose.Schema({
        name: String
    })

    const Item =  new mongoose.model("Item", itemSchema)

    const item1 = new Item({
        name : "Welcome to todo list v2"
    });
    const item2 = new Item({
        name : "hit the + to add a new item"
    });
    const item3 = new Item({
        name : " <-- or hit this to delte one"
    });
    const deafaultitems = [item1,item2,item3];

    const listSchema = new mongoose.Schema({
        name : String,
        items: [itemSchema]
    })

    const List = new mongoose.model("List", listSchema);



    async function initItems() {
        
    
    return holder;
    }



    var today;



app.get("/", async function(req, res){
    const d = new Date();
    const options =  {weekday: "long", day: "numeric", month: "long"}   
    today = d.toLocaleDateString("en-US", options);
    const firstCheack = await Item.count();
    if (firstCheack == 0) {
        Item.insertMany(deafaultitems)
        .then(function(){
            console.log("inserted deafault values")
        }).catch(function(error){
         console.log(error)
        });
        res.redirect("/")
    } else {
    const items = await Item.find()

     res.render("list", {listTitle: today, items: items});
    }

})


app.post("/", async function(req, res){
    const newItem = new Item({
        name: req.body.newToDO
    })
    
    if (req.body.list == today){
        newItem.save();
        res.redirect("/");
    } else {
        foundList = await List.findOne({name: req.body.list.split(" ")[0]});
        foundList.items.push(newItem);
        foundList.save();
        res.redirect("/"+req.body.list.split(" ")[0]);
    }
 
})

app.post("/delete",async  function(req, res){
    const ls = req.body.id.split("//");
    if (ls[0] == today){
    await Item.findOneAndDelete({_id: ls[1]});
    res.redirect("/")
    } else {
        await List.findOneAndUpdate({name: ls[0].split(" ")[0]}, {$pull: {items: {_id: ls[1]}}});
        res.redirect("/"+ ls[0].split(" ")[0])
    }
})

//////////////////////////////////////
app.get("/:list", async function(req, res){
    const listname = _.capitalize(req.params.list);
    if (listname == "" || listname == "delete"){
        res.redirect("/")
    }else{
    let holder = await List.findOne({name: listname},{_id:0, items:1})
        if(holder == null){

            const list = new List({
                name : listname,
                items: deafaultitems
            })

            await list.save()
            holder = await List.findOne({name: listname},{_id:0, items:1})
            res.redirect("/" + listname)
        } else if (holder.items.length == 0){
            foundList = await List.findOne({name: listname});
            foundList.items= deafaultitems;
            foundList.save();
            res.redirect("/" + listname)
        }
        else {
            res.render("list", {listTitle: listname + " List", items: holder.items});
        }
    }
})



app.listen(process.env.PORT || 3000, function(){
    console.log("server started on port 3000 or " + process.env.PORT);
})


};