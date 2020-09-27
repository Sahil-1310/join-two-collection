const Express= require('express');
const app = Express();
const router = require('./Router/Router')
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const dotenv = require('dotenv');
dotenv.config();


//Using mongoose to connect Mongodb
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT,
    {useNewUrlParser:true,useUnifiedTopology:true},
    ()=>{console.log("connected to mongodb")});


    app.use('/',router);
   

    app.listen(4000,()=>{console.log("Connected to port:4000")})