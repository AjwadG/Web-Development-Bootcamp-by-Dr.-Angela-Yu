// HINTS:
import express from "express"
import axios from "axios"

const app = express()
app.use(express.static("public"))
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const results = await axios.get('https://secrets-api.appbrewery.com/random')
        const { secret, username } = results.data
        res.render('index.ejs', { secret, user: username })
    } catch (error) {
        if (error.response)
            console.log(error.response.data);
        else
            console.log(error.message);
        res.render('index.ejs', { secret: error.message, user: "unable to contect to the api" })
    }
    
})

app.listen(port, () => {
    console.log(`server statred in port ${port}`);
})
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
