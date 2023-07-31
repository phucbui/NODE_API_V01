require('dotenv').config();
const express = require('express');
const app = express();
var cors = require('cors');
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');


const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//routes
app.use('/api/product', productRoute);


app.get('/', (req, res) => {
  throw new Error('Fake Error!!!');
  // res.send('Hello World!')
});

app.get('/blog', (req, res) => {
  res.send('Hello Blog!')
});

//error middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}