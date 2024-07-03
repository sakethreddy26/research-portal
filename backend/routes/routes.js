const express=require("express")

const router=express.Router()

const student_login=require("../controllers/student_login")

const {getAllProfessors}=require("../controllers/professor_controller")
const {getProfessorById}=require("../controllers/professor_controller")
const getResearchDetails=require("../controllers/research_details")

router.get("/",(req,res)=>{
    res.status(200).send({"message":"pesu-portal-backend"})
})


router.post("/login",student_login)
router.get("/getProfessors",getAllProfessors)
router.get("/getProfessorbyid/:id",getProfessorById)
router.get("/getResearchDetails/:authorId",getResearchDetails)

module.exports=router