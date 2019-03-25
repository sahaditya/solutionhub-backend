const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routePage = require('./routes/route')
const dbConfig = require('./dbConfig/databaseConfig')

const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.get('/', (req, res)=>{res.json({message : 'Welcome to solution hub'});});
app.use('/route', routePage);
mongoose.connect(dbConfig.url,{ useNewUrlParser: true }).then(()=>console.log('Database connected successfully')).catch((err)=>console.log("Database connection failed ",err))


app.listen(8080, ()=>{console.log("Running server in port 8080");});



