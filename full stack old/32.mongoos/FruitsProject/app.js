const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main(){
 
await mongoose.connect("mongodb://127.0.0.1:27017/FruitsDB");


const fruitShcema = mongoose.Schema({
  name: {
    type: String,
  required: true},
  rating: {
    type: Number,
    min :1,
    max: 10
  },
  review: String
})


const Fruit = mongoose.model("Fruit", fruitShcema);

const fruit = new Fruit({
  name : "grape",
  rating: 10,
  review: "its the best"
})
// fruit.save()

const personShcema =  mongoose.Schema({
  name: String,
  age: Number ,
  favFruit: fruitShcema
});

const Person = mongoose.model("Person", personShcema);



const Kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "its the best"
})
const orange = new Fruit({
  name: "Orange",
  rating: 3,
  review: "it's just bad"
})
const banana = new Fruit({
  name: "Banana",
  rating: 7,
  review: "well it good for sports"
})


const fruits = await Fruit.find();
fruits.forEach(fruit => {
  console.log(fruit.name);
});
const person = new Person({
  name: "ali",
  age: 20,
  favFruit: Kiwi
})
// person.save();

const shit = new Fruit(fruits[1])

Person.updateOne({ age: 23 }, {favFruit: shit})
  .catch((err) => {
    console.log(err);
  });

setTimeout(() => {
  mongoose.connection.close();
}, 4);

}

