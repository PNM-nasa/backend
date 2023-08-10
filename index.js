/*


const http = require('http')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://maingocphong176:lmao@nasa1.gogy0gf.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
token = 'AAAAAAAAAAAB'
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log('connected');
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    
    const database = await client.db("test-dp");
  
    
    if(await database.collection('user').findOne({
      id: token
    })==null){

      console.log('Create new user');
  
      await  database.collection('user').insertOne({
        id: token,
        name:"nassa"
      });
    }
    console.log(await database.collection('user').findOne({
      id: token
    }))
    

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
const sever = http.createServer((req, res)=>{


    res.setHeader('Content-Type','test/html')
    res.write(req)
    res.end('Hello World!');
  
})
const POST = 3000
sever.listen(POST, ()=> console.log('sever is running'))
run().catch(console.dir);

//var MongoClient = require('mongodb').MongoClient;
*/
