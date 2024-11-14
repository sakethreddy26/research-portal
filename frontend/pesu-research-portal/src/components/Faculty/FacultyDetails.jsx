// FacultyDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

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
        const professorResponse = await fetch(`http://localhost:4000/v1/api/getProfessorbyemail/${email}`);
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
  };

  const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

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

  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = professor.publications?.slice(indexOfFirstPublication, indexOfLastPublication) || [];

  return (
    <Box sx={{ minHeight: '100vh', backgroundImage: 'url(/img/pixelcut-export.jpg)', backgroundSize: 'cover', p: 3 }}>
      {/* Profile Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 2,
          p: 3,
          mb: 4,
        }}
      >
        <Avatar
          alt={professor.name}
          sx={{ width: 120, height: 120, mr: { md: 4 }, mb: { xs: 2, md: 0 }, bgcolor: 'primary.main', fontSize: 80 }}
        >
          {professor.profileImage ? (
            <img
              src={professor.profileImage}
              alt={professor.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <PersonIcon fontSize="inherit" />
          )}
        </Avatar>

        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {professor.name}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {professor.designation || 'Professor'}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {professor.department} - {professor.campus} Campus
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Email: {professor.email}
          </Typography>
        </Box>
      </Box>

      {/* Tabs */}
      <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="About" />
          <Tab label="Publications" />
          <Tab label="Education" />
          <Tab label="Experience" />
        </Tabs>

        {/* Tab Panels */}
        <Box sx={{ p: 3 }}>
          {currentTab === 0 && (
            <>
              <Typography variant="h6" gutterBottom>
                Responsibilities
              </Typography>
              <Typography variant="body1">
                {professor.responsibilities?.join(', ') || 'N/A'}
              </Typography>
            </>
          )}

          {currentTab === 1 && (
            <>
              <Typography variant="h6" gutterBottom>
                Publications
              </Typography>
              {currentPublications.length > 0 ? (
                <>
                  {currentPublications.map((publication, index) => (
                    <Card sx={{ mb: 2 }} key={index}>
                      <CardContent>
                        <Typography variant="h6">{publication.Title_y || 'N/A'}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Authors: {publication['Author(s)'] || 'N/A'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Journal: {publication.Journal || 'N/A'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Year: {publication.Year || 'N/A'}
                        </Typography>
                        {publication.DOI && (
                          <Typography variant="body2">
                            <a href={`https://doi.org/${publication.DOI}`} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2' }}>
                              Read More
                            </a>
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                  <Pagination
                    count={Math.ceil((professor.publications?.length || 0) / publicationsPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                    sx={{ mt: 2 }}
                  />
                </>
              ) : (
                <Typography>No Publications Found</Typography>
              )}
            </>
          )}

          {currentTab === 2 && (
            <>
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              {professor.education?.length > 0 ? (
                <List>
                  {professor.education.map((edu, index) => (
                    <ListItem key={index}>
                      <Typography variant="body1">{edu}</Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography>No Education Details Found</Typography>
              )}
            </>
          )}

          {currentTab === 3 && (
            <>
              <Typography variant="h6" gutterBottom>
                Experience
              </Typography>
              {professor.experience?.length > 0 ? (
                <List>
                  {professor.experience.map((exp, index) => (
                    <ListItem key={index}>
                      <Typography variant="body1">{exp}</Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography>No Experience Details Found</Typography>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FacultyDetail;
