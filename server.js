const express = require('express');
const app = express();
const mysql = require('mysql');
const helmet = require('helmet');
const cors = require('cors');

const router = require('./routes/index.js');


app.use(cors()); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json
app.use(helmet()); // security
app.disable('x-powered-by'); // security hide express version from header response  
app.use('/', router);


const port = process.env.PORT || 3001
app.listen(port,() =>{
    console.log("server is running on port 3001");
})



