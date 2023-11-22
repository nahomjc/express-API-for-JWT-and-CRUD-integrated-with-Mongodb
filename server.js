const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv=require("dotenv").config()

connectDb
const app =express();


app.use(express.json())

const port = process.env.PORT|| 5000;
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
