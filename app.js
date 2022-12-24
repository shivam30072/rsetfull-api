const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json());

const postRoute = require('./routes/posts');

app.use('/posts', postRoute);


mongoose.connect(
    process.env.DB_CONNECTION,
      mongoose.set('strictQuery', true), 
      () => {
           console.log('connected to db!');
});


app.get('/', (req, res) => {
   res.send('hello world');
});



app.listen(3000);