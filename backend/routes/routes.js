const express=require("express")

const router=express.Router()

const student_login=require("../controllers/student_login")


router.get("/",(req,res)=>{
    res.status(200).send({"message":"pesu-portal-backend"})
})


router.post("/login",student_login)


module.exports=router