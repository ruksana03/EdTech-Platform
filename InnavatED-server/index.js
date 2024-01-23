const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3hdabzk.mongodb.net/?retryWrites=true&w=majority`;
 
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
      await client.connect();

      //   collections
      const courseCollection = client.db("Edtech").collection("courses")
      const reviewCollection = client.db("Edtech").collection("reviews")
     
    // ---------------------------all courses apis ----------------
     
      //  get api  
      app.get('/courses', async (req, res) => {
         try {
            const result = await courseCollection.find().toArray()
            res.send(result)
         } catch (error) {
            console.log(error);
         }
      })

      //------------------------  review apis--------------------
      app.get("/reviews", async (req, res) => {
          try {
            const result = await reviewCollection.find().toArray()
            res.send(result)
          } catch (error) {
            console.log(error);
          }
      })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






app.get('/',(req,res)=>{
    res.send('our server is running');
})

app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})