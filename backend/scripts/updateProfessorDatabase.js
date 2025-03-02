const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Define Professor Schema
const professorSchema = new mongoose.Schema({
  Name: String,
  "Profile Image": String,
  Expertise: String,
  Experience: String,
  Qualification: String,
  "Academic IDs": {
    "Orcid Id": String,
    "Scopus Id": String,
    "Google Scholar Id": String
  },
  "Total Papers": Number,
  "Research Papers": [{
    Title: String,
    Authors: String,
    Type: String,
    Year: String,
    DOI: String,
    Citations: String
  }],
  "Citations & Indices": {
    CITATIONS: Number,
    "H-INDEX": Number
  },
  "Google Scholar": mongoose.Schema.Types.Mixed,
  Campus: String,
  Department: String
});

const Professor = mongoose.model('Professor_irins', professorSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pesu_research_portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('Connected to MongoDB');
  
  try {
    // Read JSON file
    const filePath = path.join(__dirname, '../filtered_updated.json');
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Clear existing data
    await Professor.deleteMany({});
    console.log('Cleared existing professor data');
    
    // Insert new data
    await Professor.insertMany(jsonData);
    console.log(`Inserted ${jsonData.length} professors into the database`);
    
    mongoose.disconnect();
    console.log('Database update complete');
  } catch (error) {
    console.error('Error updating database:', error);
    mongoose.disconnect();
  }
})
.catch(err => {
  console.error('MongoDB connection error:', err);
}); 