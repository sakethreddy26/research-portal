// FacultyDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import LinkIcon from '@mui/icons-material/Link';
import CitationIcon from '@mui/icons-material/FormatQuote';

import {
  Typography,
  Box,
  CircularProgress,
  Alert,
  Avatar,
  Tabs,
  Tab,
  Card,
  CardContent,
  List,
  ListItem,
  Pagination,
  Divider,
  Grid,
  Chip,
  Paper,
  Button,
} from '@mui/material';

const FacultyDetail = () => {
  const { email } = useParams();
  const [professor, setProfessor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTab, setCurrentTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 5;

  useEffect(() => {
    const fetchProfessor = async () => {
      try {
        const professorResponse = await fetch(`http://localhost:5000/v1/api/getProfessorbyemail/${email}`);
        if (!professorResponse.ok) {
          throw new Error(`HTTP error! status: ${professorResponse.status}`);
        }
        const professorData = await professorResponse.json();
        setProfessor(professorData[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessor();
  }, [email]);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

  // Calculate pagination for research papers
  const getPublicationsForPage = () => {
    if (!professor || !professor["Research Papers"]) return [];
    
    const indexOfLastPublication = currentPage * publicationsPerPage;
    const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
    return professor["Research Papers"].slice(indexOfFirstPublication, indexOfLastPublication);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (!professor) {
    return <Alert severity="warning">No Professor Found</Alert>;
  }

  // Format experience text
  const formatExperience = (experienceText) => {
    if (!experienceText) return [];
    return experienceText.split('\n').filter(line => line.trim() !== '');
  };

  // Format qualification text
  const formatQualification = (qualificationText) => {
    if (!qualificationText) return [];
    return qualificationText.split('\n').filter(line => line.trim() !== '');
  };

  const experienceItems = formatExperience(professor.Experience);
  const qualificationItems = formatQualification(professor.Qualification);
  const totalPublications = professor["Research Papers"]?.length || 0;
  const totalPages = Math.ceil(totalPublications / publicationsPerPage);
  const currentPublications = getPublicationsForPage();

  return (
    <Box sx={{ p: 3, maxWidth: '1500px', mx: 'auto', backgroundColor: "#f5f5f5"}}>
      {/* Professor Header */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Avatar
              sx={{
                width: 150,
                height: 150,
                border: '3px solid #1976d2',
              }}
              src={professor["Profile Image"] || ''}
              alt={professor.Name}
            >
              {!professor["Profile Image"] && <PersonIcon sx={{ fontSize: 80 }} />}
            </Avatar>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h4" component="h1" gutterBottom>
              {professor.Name}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {professor.Department || 'Computer Science'}, {professor.Campus || 'EC Campus'}
            </Typography>
            
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                <strong>Expertise:</strong> {professor.Expertise || 'Not specified'}
              </Typography>
              
              <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {professor["Academic IDs"] && Object.entries(professor["Academic IDs"]).map(([key, value]) => (
                  value && (
                    <Button 
                      key={key}
                      variant="outlined" 
                      size="small" 
                      startIcon={<LinkIcon />}
                      href={value}
                      target="_blank"
                      sx={{ mr: 1, mb: 1 }}
                    >
                      {key}
                    </Button>
                  )
                ))}
              </Box>
              
              <Box sx={{ mt: 2 }}>
                <Chip 
                  icon={<CitationIcon />} 
                  label={`Total Papers: ${professor["Total Papers"] || 0}`} 
                  color="primary" 
                  sx={{ mr: 1, mb: 1 }} 
                />
                {professor["Citations & Indices"] && (
                  <>
                    <Chip 
                      icon={<CitationIcon />} 
                      label={`Citations: ${professor["Citations & Indices"]["CITATIONS"] || 0}`} 
                      color="secondary" 
                      sx={{ mr: 1, mb: 1 }} 
                    />
                    <Chip 
                      icon={<CitationIcon />} 
                      label={`H-Index: ${professor["Citations & Indices"]["H-INDEX"] || 0}`} 
                      color="info" 
                      sx={{ mr: 1, mb: 1 }} 
                    />
                  </>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Tabs */}
      <Box sx={{ width: '100%', mb: 2 }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="professor details tabs"
        >
          <Tab label="Publications" />
          <Tab label="Education" />
          <Tab label="Experience" />
          {professor["Google Scholar"] && <Tab label="Google Scholar" />}
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ p: 2 }}>
        {currentTab === 0 && (
          <>
            <Typography variant="h6" gutterBottom>
              Research Publications
            </Typography>
            {currentPublications.length > 0 ? (
              <>
                {currentPublications.map((paper, index) => (
                  <Card key={index} sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {paper.Title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {paper.Authors}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        <strong>Type:</strong> {paper.Type}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        <strong>Year:</strong> {paper.Year}
                      </Typography>
                      {paper.DOI && paper.DOI !== "No DOI" && (
                        <Button 
                          variant="outlined" 
                          size="small" 
                          href={paper.DOI} 
                          target="_blank"
                          startIcon={<LinkIcon />}
                          sx={{ mt: 1 }}
                        >
                          DOI Link
                        </Button>
                      )}
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        <strong>Citations:</strong> {paper.Citations || '0'}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Pagination */}
                <Box display="flex" justifyContent="center" mt={3}>
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={paginate}
                    color="primary"
                  />
                </Box>
              </>
            ) : (
              <Typography>No Publications Found</Typography>
            )}
          </>
        )}

        {currentTab === 1 && (
          <>
            <Typography variant="h6" gutterBottom>
              Education
            </Typography>
            {qualificationItems.length > 0 ? (
              <List>
                {qualificationItems.map((edu, index) => (
                  <ListItem key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <SchoolIcon sx={{ mr: 2, mt: 0.5 }} color="primary" />
                    <Typography variant="body1">{edu}</Typography>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography>No Education Details Found</Typography>
            )}
          </>
        )}

        {currentTab === 2 && (
          <>
            <Typography variant="h6" gutterBottom>
              Experience
            </Typography>
            {experienceItems.length > 0 ? (
              <List>
                {experienceItems.map((exp, index) => (
                  <ListItem key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <WorkIcon sx={{ mr: 2, mt: 0.5 }} color="primary" />
                    <Typography variant="body1">{exp}</Typography>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography>No Experience Details Found</Typography>
            )}
          </>
        )}

        {currentTab === 3 && professor["Google Scholar"] && (
          <>
            <Typography variant="h6" gutterBottom>
              Google Scholar Metrics
            </Typography>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h4" color="primary">
                        {professor["Google Scholar"]["CITATION"] || 0}
                      </Typography>
                      <Typography variant="body1">Citations</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h4" color="primary">
                        {professor["Google Scholar"]["H INDEX"] || 0}
                      </Typography>
                      <Typography variant="body1">H-Index</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h4" color="primary">
                        {professor["Google Scholar"]["I-10 INDEX"] || 0}
                      </Typography>
                      <Typography variant="body1">i10-Index</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    href={professor["Academic IDs"]["Google Scholar Id"] || '#'}
                    target="_blank"
                    startIcon={<LinkIcon />}
                  >
                    View Google Scholar Profile
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </>
        )}
      </Box>
    </Box>
  );
};

export default FacultyDetail;
