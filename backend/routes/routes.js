const express = require("express");
const router = express.Router();
const { userLogin, userSignup } = require('../controllers/user_controller');
const profile = require('../controllers/profile');
const verifyToken = require('../middleware/auth');
const { getAllPublications } = require("../controllers/publication_controller");
const { upload, addCircular, getCirculars } = require('../controllers/add_circulars');

router.get("/", (_, res) => {
  res.status(200).send({ message: "pesu-portal-backend" });
});

// Authentication routes
router.post('/login', userLogin);
router.post('/signup', userSignup);
router.get('/profile', verifyToken, profile);

// Protected routes
router.get('/publications', verifyToken, getAllPublications);
router.post('/circulars', verifyToken, upload.single('file'), addCircular);
router.get('/circulars', verifyToken, getCirculars);

module.exports = router;
