import express from "express"

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    const day = new Date().getDay()
    res.render('index.ejs', { day });
})

app.listen(port, () => {
    console.log(`server stated in port ${port}`)
})