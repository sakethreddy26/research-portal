const express = require('express');
const router = express.Router();
const Professor = require('../models/Professor');

// Get all professors
router.get('/getAllprofs', async (req, res) => {
  try {
    // Check if the collection exists and has documents
    const count = await Professor.countDocuments();
    console.log(`Found ${count} professors in the database`);
    
    if (count === 0) {
      console.log('No professors found in the database');
      return res.json([]);
    }
    
    const professors = await Professor.find({});
    console.log(`Successfully retrieved ${professors.length} professors`);
    
    // Add this before the transformation
    console.log('Sample professor from DB:', professors[0]);
    
    // Transform data to match the expected format in the frontend
    const transformedData = professors.map(prof => ({
      name: prof.Name || 'Unknown',
      email: prof.Name ? prof.Name.toLowerCase().replace(/\s+/g, '.') + '@pes.edu' : 'unknown@pes.edu',
      department: prof.Department || 'Unknown',
      campus: prof.Campus || 'Unknown',
      designation: prof.Experience ? prof.Experience.split('\n')[1] || 'Professor' : 'Professor',
      profileImage: prof["Profile Image"] || null
    }));
    
    res.json(transformedData);
  } catch (error) {
    console.error('Error fetching professors:', error);
    res.status(500).json({ error: 'Failed to fetch professors', details: error.message });
  }
});

// Get professor by email
router.get('/getProfessorbyemail/:email', async (req, res) => {
  try {
    const { email } = req.params;
    console.log(`Searching for professor with email: ${email}`);
    
    // Extract name from email (assuming email format is firstname.lastname@pes.edu)
    const nameFromEmail = email
      .split('@')[0]
      .split('.')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
    
    console.log(`Extracted name from email: ${nameFromEmail}`);
    
    // Find professor by name (case insensitive)
    const professor = await Professor.findOne({
      Name: new RegExp(nameFromEmail, 'i')
    });
    
    if (!professor) {
      console.log(`No professor found with name: ${nameFromEmail}`);
      return res.status(404).json({ error: 'Professor not found' });
    }
    
    console.log(`Found professor: ${professor.Name}`);
    res.json([professor]); // Return as array to match existing frontend expectations
  } catch (error) {
    console.error('Error fetching professor:', error);
    res.status(500).json({ error: 'Failed to fetch professor details', details: error.message });
  }
});

// Get all publications
router.get('/getAllPublications', async (req, res) => {
  try {
    const professors = await Professor.find({});
    
    // Extract all publications from all professors
    let allPublications = [];
    professors.forEach(prof => {
      if (prof["Research Papers"] && Array.isArray(prof["Research Papers"])) {
        // Add professor name to each publication
        const publications = prof["Research Papers"].map(paper => ({
          ...paper,
          professorName: prof.Name
        }));
        allPublications = [...allPublications, ...publications];
      }
    });
    
    // Sort by year (most recent first)
    allPublications.sort((a, b) => {
      const yearA = a.Year ? parseInt(a.Year.match(/\d{4}/)?.[0] || 0) : 0;
      const yearB = b.Year ? parseInt(b.Year.match(/\d{4}/)?.[0] || 0) : 0;
      return yearB - yearA;
    });
    
    res.json(allPublications);
  } catch (error) {
    console.error('Error fetching publications:', error);
    res.status(500).json({ error: 'Failed to fetch publications', details: error.message });
  }
});

module.exports = router; 