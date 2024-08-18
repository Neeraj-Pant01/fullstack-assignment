const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv").config();
const mongoose = require("mongoose")
const cardRouter = require("./router")

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 7000;

const connection = async () =>{
    try{
        await mongoose.connect(`${process.env.DBURL}`)
        console.log("database is connected successfully !")
    }catch(err){
        console.log(err)
    }
}

app.use('/api/v1/cards',cardRouter)

app.listen(PORT,()=>{
    connection();
    console.log(`server is running at the port ${PORT}`)
})
