const express=require("express")
const app=express()
const cors=require("cors")
const cookieParser = require('cookie-parser');
require("dotenv").config()
const mongoose=require("mongoose")
const router=require("./routes/routes")





const connect_to_db=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected")
    } catch (error) {
        console.log("err",error)
    }
}

app.use(
    cors({
      origin: 'http://localhost:3000', 
      credentials: true,
    })
  );
app.use(cookieParser());
app.use(express.json())
app.use(express.static('public'));


app.use("/v1/api",router)

app.listen(4000,()=>{
    connect_to_db()
    console.log("server is running")
})