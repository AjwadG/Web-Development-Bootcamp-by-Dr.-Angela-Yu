const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('test1');
    const fruits = database.collection('test1');

    // query for movies that have a runtime less than 15 minutes
    const query = { _id: 1 };
    const options = {
      // sort returned documents in ascending order by title (A->Z)
      sort: { name: 1 },
      // Include only the `title` and `imdb` fields in each returned document
      projection: { _id: 0, hopeis: 1},
    };
    const cursor = fruits.find(query, options);
    // print a message if no documents were found
    if ((await fruits.countDocuments(query)) === 0) {
      console.log("No documents found!");
    }
    for await (const doc of cursor) {
      console.dir(doc);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);