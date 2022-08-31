const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/connection');
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
const start = async () => {
    try {
        await connectDB(process.env.DB_CONNECTION);
        app.listen(port,()=>{
            console.log(`Server is listening on port:${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();