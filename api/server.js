const express = require('express');
const ConnectDb = require('./config/ConnectDb');
const init=require('./config/setUp')
const app=express();
const cors = require('cors');
const dataRouter = require('./routes/data.route');
require('dotenv').config();

app.use(express.json());
app.use(cors());

const PORT = 5000 ||process.env.PORT;
ConnectDb();
init();


app.use("/api/transactions",dataRouter)

app.listen(PORT, (err)=>{
if(err) throw console.log(err);
console.log(`listen to port ${PORT}`);
})
