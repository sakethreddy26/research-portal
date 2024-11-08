const path = require('path');
const multer = require('multer');
const fs = require('fs');

// Ensure the 'public/circular' directory exists
const circularsDir = path.join(__dirname, '../public/circular');
fs.mkdirSync(circularsDir, { recursive: true });

// Set up multer storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, circularsDir);
  },
  filename: function (req, file, cb) {
    // Rename the file to prevent conflicts
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

const addCircular = (req, res) => {
  // The file is saved to disk by multer
  // The title is in req.body.title
  const title = req.body.title;
  const file = req.file; // Multer adds the file to req.file

  // Read the existing circulars from a JSON file
  const circularsFile = path.join(__dirname, '../data/circulars.json');

  let circulars = [];

  if (fs.existsSync(circularsFile)) {
    const data = fs.readFileSync(circularsFile);
    circulars = JSON.parse(data);
  }

  // Add the new circular
  circulars.push({
    title: title,
    filename: file.filename,
    url: `/circular/${file.filename}`,
  });

  // Save back to the JSON file
  fs.writeFileSync(circularsFile, JSON.stringify(circulars));

  res.status(200).send({ message: 'Circular added successfully' });
};

const getCirculars = (req, res) => {
  const circularsFile = path.join(__dirname, '../data/circulars.json');

  let circulars = [];

  if (fs.existsSync(circularsFile)) {
    const data = fs.readFileSync(circularsFile);
    circulars = JSON.parse(data);
  }

  res.status(200).send(circulars);
};

module.exports = {
  upload,
  addCircular,
  getCirculars,
};
