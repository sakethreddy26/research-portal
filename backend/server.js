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
app.use(cookieParser());
app.use(cors())
app.options('*',cors());
var allowCrossDomain = function(req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();  
  }
app.use(allowCrossDomain);
app.use(express.json())


app.use("/v1/api",router)

app.listen(4000,()=>{
    connect_to_db()
    console.log("server is running")
})