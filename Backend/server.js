require('dotenv').config();
const express = require('express');
const router = require('./routes');
const connectDb = require('./db/connectdb');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors')
const app = express();


app.use(express.json());

connectDb()
app.use(cors())

app.use(router)
app.use(errorHandler)



app.listen(4000,()=>{
    console.log('server is running on port 4000');
})
