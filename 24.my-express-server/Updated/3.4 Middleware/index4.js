import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
  const { street, pet} = req.body;
  req.bandName = street + pet;
  next();
})
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post('/submit', (req, res) => {
  
  res.send(`<h1>Your Band Nmae is:</h1> <h2>${req.bandName}🎸</h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
