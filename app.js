const express = require('express');
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



app.listen(port,()=>{
    console.log(`Server is listening on port:${port}...`);
})