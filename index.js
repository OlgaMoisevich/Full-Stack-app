const express = require('express');
const mongoose =require('mongoose');
const path = require('path');
const postRouter = require('./routes/post');
const keys = require('./keys');


const port = process.env.PORT || 3000;
const clientPath = path.join(__dirname, 'client');


mongoose.connect(keys.mongoURI,{ useNewUrlParser: true , useUnifiedTopology: true})
    .then(()=>console.log('Mongodb connected.'))
    .catch(err=> console.error(err));



const app = express();
app.use('/api/post', postRouter);
app.use(express.static(clientPath));

app.listen(port, ()=>{
    console.log(`Server has been started on port ${port}`)
});

