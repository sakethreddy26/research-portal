const publication = require("../models/publication_model");

const getAllPublicationsByYear = async (req, res) => {
  const year = req.params.year;
  try {
    const publications = await publication.find({
      Year: { $eq: parseInt(year) },
    });
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPublicationsByName = async (req, res) => {
  const name = req.params.name;
  const searchTerm = new RegExp(name, "i");
  try {
    const publications = await publication.find({
      $or: [{ First_Name: searchTerm }, { Last_Name: searchTerm }],
    });
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPublicationsByYear,
  getAllPublicationsByName,
};
