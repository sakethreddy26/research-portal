const express = require("express");

const router = express.Router();

const { getAllProfessors,getProfessorbyemail } = require("../controllers/professor_controller");
const { getProfessorById,get_all_rr_ec_profs } = require("../controllers/professor_controller");
const facultySignup = require("../controllers/faculty_signup");
const { facultyLogin } = require("../controllers/faculty_login");
const profile = require("../controllers/profile");
const getallscholars=require("../controllers/scholars")
const {
  getAllPublicationsByYear,
  getAllPublicationsByName,
  getAllPublications,
} = require("../controllers/publication_controller");

const {
  upload,
  addCircular,
  getCirculars,
} = require('../controllers/add_circulars');

router.get("/", (_, res) => {
  res.status(200).send({ message: "pesu-portal-backend" });
});

router.get("/getProfessors", getAllProfessors);
router.get("/getProfessorbyid/:id", getProfessorById);
router.get("/getProfessorbyemail/:email",getProfessorbyemail);
// router.get("/getResearchDetails/:authorId",getResearchDetails)
router.get("/getPublications/:year", getAllPublicationsByYear);
router.get("/getPublicationsByName/:name", getAllPublicationsByName);
router.get("/getAllPublications", getAllPublications);
router.get("/faculty/profile", profile);
router.post("/faculty/signup", facultySignup);
router.post("/faculty/login", facultyLogin);
router.get("/getAllscholars",getallscholars)
router.get("/getAllprofs",get_all_rr_ec_profs)
router.post('/addCircular', upload.single('file'), addCircular);
router.get('/getCirculars', getCirculars);

module.exports = router;
