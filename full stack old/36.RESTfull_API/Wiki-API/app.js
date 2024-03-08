const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("view engin", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

main().catch(err => { console.log(err);});

async function main(){


    await mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");

    const articaleSchema = new mongoose.Schema({
        title: String,
        content: String
    });
    const Artical = mongoose.model("Artical", articaleSchema);


    ///////////////////////////////////////////// All Articals ////////////////////////////////////////////////
    

    app.route("/articals")


      .get(async (req, res) =>{

        await Artical.find({})
          .then(resault => res.send(resault))
          .catch((err) => res.send(err));

      })


      .post(async (req, res) =>{

        const newArtical = Artical({
          title: req.body.title,
          content: req.body.content
        })

        await newArtical.save()
          .then((resault) => res.send(resault))
          .catch(err => res.send(err))

      })


      .delete(async (req, res) =>{

        await Artical.deleteMany({})
          .then(resault => res.send(resault))
          .catch(err => res.send(err))

      });


    ///////////////////////////////////////////// One Articals ////////////////////////////////////////////////



      app.route("/articals/:tile")

      .get(async (req, res) =>{
        await Artical.findOne({title: req.params.tile})
          .then(resault => {
            if (resault == null) res.send("not found");
             else res.send(resault);
          })
          .catch(err => res.send(err));
      })

      .delete(async (req, res) =>{
        await Artical.deleteOne({title: req.params.tile})
          .then(resault => res.send(resault))
          .catch(err => res.send(err));
      })

      .put(async (req, res) =>{
        await Artical.findOneAndReplace(
          {title: req.params.tile}, 
          {title: req.body.title, content: req.body.content})
          .then(resault => {
            if (resault == null) res.send("not found");
             else res.send("Artical changed successfully");
          })
          .catch(err => res.send(err));
      })

      .patch(async (req, res) =>{
        await Artical.findOneAndUpdate(
          {title: req.params.tile}, req.body)
          .then(resault => {
            if (resault == null) res.send("not found");
             else res.send("Artical updated successfully");
          })
      });



    app.listen(process.env.PORT|| 3000, function() {
    console.log("server started on port 3000 or " + process.env.PORT);
    });



};