const express=require("express")

const router=express.Router()


const {getAllProfessors}=require("../controllers/professor_controller")
const {getProfessorById}=require("../controllers/professor_controller")
const facultySignup =require("../controllers/faculty_signup")
const {facultyLogin}=require("../controllers/faculty_login")
const profile = require("../controllers/profile")

router.get("/",(_,res)=>{
    res.status(200).send({"message":"pesu-portal-backend"})
})


router.get("/getProfessors",getAllProfessors)
router.get("/getProfessorbyid/:id",getProfessorById)
// router.get("/getResearchDetails/:authorId",getResearchDetails)

router.get("/faculty/profile",profile)
router.post("/faculty/signup",facultySignup)
router.post("/faculty/login",facultyLogin)

module.exports=router