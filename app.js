const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')
const app = express();
const routes = require('./routes/tasks');

const port = 3000;
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//routes
app.get('/hello',(req,res)=>{
    res.send('welcome to task manager...');
});

//Middleware for routes
app.use('/api/v1/tasks',routes);


// connect to db
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology:true, },(error)=>{
    if(error){
        return console.log(error);
    }
    console.log('Connected to MongoDB Atlas succesfully ...');
});


app.listen(port,()=>{
    console.log(`Server is listening on port:${port}...`);
})