const express = require('express');
const app = express();
const port = 3000;


const cors = require('cors');
const corsOption = {
  origin: 'http://localhost:5173',
};
app.use(cors(corsOption));


app.use(express.json());


const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'BlogDatabase';


app.get('/api', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('myBlogs');
  const blogData = await collection.find().toArray();
  res.json({ xyz: blogData });
});
app.post('/api/insert', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('myBlogs');
  const newBlogItem = req.body;
  const result = await collection.insertOne(newBlogItem);
  res.json({ success: true, result });
})
app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await client.connect();
  const db = client.db(dbName);
  const collection =  db.collection('myBlogs');
  const result = await collection.deleteOne({
    _id: new ObjectId(id)
  });
  res.json({ success: true, result });
});

app.put('/api/posts/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description} = req.body; // Extract the updated title from the request body
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('myBlogs');
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { title, description } } 
    );
    res.json({ success: true, message: "Post updated successfully", result });
  } catch (error) {
    res.status(500).json({ error: "Failed to update post" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


