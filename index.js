const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res)=>{
    res.json({message : 'Welcome to solution hub'});
});

app.listen(8080, ()=>{
    console.log("Running server in port 8080");
})