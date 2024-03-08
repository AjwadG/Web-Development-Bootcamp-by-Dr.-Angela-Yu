//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import  express  from "express";
import bodyParser from "body-parser";
import { dirname }  from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(isOth);

function isOth (req, res, next) {
    const { password } = req.body;
    if (password && password === "ILovePrograming")
        req.isOth = true;
    next();
}


const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.post('/check', (req, res) => {
    if (req.isOth)
        res.sendFile(`${__dirname}/public/secret.html`);
    else
        res.redirect('/');
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})