//importing modules
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

//always add body parser here only, not below route line always.
app.use(bodyparser.json());

const route = require('./route/route');
app.use('/api', route);

//connect to mongoDB

mongoose.connect('mongodb://localhost:27017/contactlist');

//onConection established:

mongoose.connection.on('connected', ()=>{
    console.log('Connected to the databse at 27017')
})

//on error

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('Error in database connection at 27017' + err)
    }
})

//port number

const port = 3000;

//adding middleware

app.use(cors());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//testing Server

app.get('/',(req, res)=>{
    res.send('foobar');
})

app.listen(port,()=>{
    console.log('Server started at port :' + port)
});
