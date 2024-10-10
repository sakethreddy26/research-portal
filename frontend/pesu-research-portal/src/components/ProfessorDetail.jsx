import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { Typography, Card, CardContent, List, ListItem, Pagination, Box, CircularProgress, Alert } from '@mui/material';

const ProfessorDetail = () => {
  const { email } = useParams();
  const [professor, setProfessor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 3;

  useEffect(() => {
    const fetchProfessor = async () => {
      try {
        const professorResponse = await fetch(`http://localhost:4000/v1/api/getProfessorbyemail/${email}`);
        if (!professorResponse.ok) {
          throw new Error(`HTTP error! status: ${professorResponse.status}`);
        }
        const professorData = await professorResponse.json();
        setProfessor(professorData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessor();
  }, [email]);

  // Safeguard to handle undefined or null professor data
  if (!professor || professor.length === 0) {
    return loading ? <CircularProgress /> : <Alert severity="error">No Professor Found</Alert>;
  }

  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = professor[0].publications?.slice(indexOfFirstPublication, indexOfLastPublication) || [];

  const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{
      backgroundImage: "url(/img/pixelcut-export.jpg)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      width: '100vw',
      minHeight: '100vh',
    }}>
      <Navbar />
      <Box display="flex" justifyContent="space-evenly" flexWrap="wrap" padding={3}>
        {/* Personal Details Section */}
        <Card sx={{ width: '60%', margin: 2, padding: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ fontSize: '2rem' }}>{professor[0].name}</Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Designation:</strong> {professor[0].designation || 'N/A'}</Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Department:</strong> {professor[0].department}</Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Campus:</strong> {professor[0].campus}</Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Email:</strong> {professor[0].email}</Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Brief Expertise:</strong> {professor[0].brief_expertise}</Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Responsibilities:</strong> {professor[0].responsibilities?.join(', ') || 'N/A'}</Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Education:</strong></Typography>
            <List>
              {professor[0].education?.map((edu, index) => (
                <ListItem key={index} sx={{ fontSize: '0.9rem' }}>{edu}</ListItem>
              ))}
            </List>
            <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Experience:</strong></Typography>
            <List>
              {professor[0].experience?.map((exp, index) => (
                <ListItem key={index} sx={{ fontSize: '0.9rem' }}>{exp}</ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Publications Section */}
        <Card sx={{ width: '35%', margin: 2, padding: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontSize: '1.5rem' }}>Publications</Typography>
            {currentPublications.length > 0 ? (
              currentPublications.map((publication, index) => (
                <Card sx={{ marginBottom: 2 }} key={index}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: '1.2rem' }}>{publication.Title_y || 'N/A'}</Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>Authors: {publication['Author(s)'] || 'N/A'}</Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>Journal: {publication.Journal || 'N/A'}</Typography>
                    {/* <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>Volume: {publication.Volume || 'N/A'}</Typography> */}
                    {/* <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>Pages: {publication.Pages || 'N/A'}</Typography> */}
                    <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>Year: {publication.Year || 'N/A'}</Typography>
                    {publication.DOI && (
                      <Typography variant="body2">
                        <a href={`https://doi.org/${publication.DOI}`} style={{ color: '#1976d2', fontSize: '0.9rem' }}>Read More</a>
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography>No Publications Found</Typography>
            )}
            <Pagination
              count={Math.ceil((professor[0]?.publications?.length || 0) / publicationsPerPage)}
              page={currentPage}
              onChange={paginate}
              variant="outlined"
              shape="rounded"
              sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
            />
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ProfessorDetail;
