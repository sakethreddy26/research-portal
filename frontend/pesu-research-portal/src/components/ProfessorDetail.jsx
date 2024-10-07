
//using mui

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import { Container, Typography, Card, CardContent, CardMedia, List, ListItem, Pagination, Box, CircularProgress, Alert } from '@mui/material';

// const ProfessorDetail = () => {
//   const { id } = useParams();
//   const [professor, setProfessor] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const publicationsPerPage = 3;

//   useEffect(() => {
//     const fetchProfessor = async () => {
//       try {
//         const professorResponse = await fetch(`http://localhost:4000/v1/api/getProfessorbyid/${id}`);
//         if (!professorResponse.ok) {
//           throw new Error(`HTTP error! status: ${professorResponse.status}`);
//         }
//         const professorData = await professorResponse.json();
//         setProfessor(professorData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfessor();
//   }, [id]);

//   const indexOfLastPublication = currentPage * publicationsPerPage;
//   const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
//   const currentPublications = professor?.publications?.slice(indexOfFirstPublication, indexOfLastPublication) || [];

//   const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

//   if (loading) return <CircularProgress />;
//   if (error) return <Alert severity="error">Error: {error}</Alert>;
//   if (!professor) return <Typography>No Professor Found</Typography>;

//   return (
//     <div style={{
//       backgroundImage: "url(/img/pixelcut-export.jpg)",
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       width: '100vw',
//       height: '100vh',
//       overflow: 'hidden'
//     }}>
//       <Navbar />
//         <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
//           <Card sx={{ width: '45%', margin: 2, padding: 2 }}>
//             {/* <div className="absolute inset-0 bg-black opacity-40" style={{ zIndex: 1 }} /> */}
//             <CardMedia
//               component="img"
//               // image="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
//               alt="Professor"
//               sx={{ borderRadius: '2px', marginBottom: 2 }}
//             />
//             <CardContent>
//               <Typography variant="h4" gutterBottom>{professor.name}</Typography>
//               <Typography variant="body1" gutterBottom><strong>Designation:</strong> {professor.designation || 'N/A'}</Typography>
//               <Typography variant="body1" gutterBottom><strong>Department:</strong> {professor.department}</Typography>
//               <Typography variant="body1" gutterBottom><strong>Campus:</strong> {professor.campus}</Typography>
//               <Typography variant="body1" gutterBottom><strong>Email:</strong> {professor.email}</Typography>
//               <Typography variant="body1" gutterBottom><strong>Brief Expertise:</strong> {professor.brief_expertise}</Typography>
//               <Typography variant="body1" gutterBottom><strong>Responsibilities:</strong> {professor.responsibilities?.join(', ') || 'N/A'}</Typography>
//               <Typography variant="body1" gutterBottom><strong>Education:</strong></Typography>
//               <List>
//                 {professor.education?.map((edu, index) => (
//                   <ListItem key={index}>{edu}</ListItem>
//                 ))}
//               </List>
//               <Typography variant="body1" gutterBottom><strong>Experience:</strong></Typography>
//               <List>
//                 {professor.experience?.map((exp, index) => (
//                   <ListItem key={index}>{exp}</ListItem>
//                 ))}
//               </List>
//             </CardContent>
//           </Card>
//           <Card sx={{ width: '45%', margin: 2, padding: 2 }}>
//             <CardContent>
//               <Typography variant="h5" gutterBottom>Publications</Typography>
//               {currentPublications.map((publication, index) => (
//                 <Card sx={{ marginBottom: 2 }} key={index}>
//                   <CardContent>
//                     <Typography variant="h6" gutterBottom>{publication.title || 'N/A'}</Typography>
//                     <Typography variant="body2">Authors: {publication.authors || 'N/A'}</Typography>
//                     <Typography variant="body2">Journal: {publication.journal || 'N/A'}</Typography>
//                     <Typography variant="body2">Volume: {publication.volume || 'N/A'}</Typography>
//                     <Typography variant="body2">Pages: {publication.pages || 'N/A'}</Typography>
//                     <Typography variant="body2">Year: {publication.year || 'N/A'}</Typography>
//                     <Typography variant="body2">
//                       <a href={`https://doi.org/${publication.doi}`} style={{ color: '#1976d2' }}>Read More</a>
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               ))}
//               <Pagination
//                 count={Math.ceil((professor.publications?.length || 0) / publicationsPerPage)}
//                 page={currentPage}
//                 onChange={paginate}
//                 variant="outlined"
//                 shape="rounded"
//                 sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
//               />
//             </CardContent>
//           </Card>
//         </Box>
//     </div>
//   );
// };

// export default ProfessorDetail;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { Container, Typography, Card, CardContent, CardMedia, List, ListItem, Pagination, Box, CircularProgress, Alert } from '@mui/material';

const ProfessorDetail = () => {
  const { id } = useParams();
  const [professor, setProfessor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 3;

  useEffect(() => {
    const fetchProfessor = async () => {
      try {
        const professorResponse = await fetch(`http://localhost:4000/v1/api/getProfessorbyid/${id}`);
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
  }, [id]);

  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = professor?.publications?.slice(indexOfFirstPublication, indexOfLastPublication) || [];

  const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">Error: {error}</Alert>;
  if (!professor) return <Typography>No Professor Found</Typography>;

  return (
    <div style={{
      backgroundImage: "url(/img/pixelcut-export.jpg)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', // Ensure the background is fixed
      width: '100vw',
      minHeight: '100vh',
    }}>
    <Navbar />
    <Box display="flex" justifyContent="space-evenly" flexWrap="wrap" padding={3}>
      {/* Personal Details Section */}
      <Card sx={{ width: '60%', margin: 2, padding: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ fontSize: '2rem' }}>{professor.name}</Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Designation:</strong> {professor.designation || 'N/A'}</Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Department:</strong> {professor.department}</Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Campus:</strong> {professor.campus}</Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Email:</strong> {professor.email}</Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Brief Expertise:</strong> {professor.brief_expertise}</Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Responsibilities:</strong> {professor.responsibilities?.join(', ') || 'N/A'}</Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Education:</strong></Typography>
          <List>
            {professor.education?.map((edu, index) => (
              <ListItem key={index} sx={{ fontSize: '0.9rem' }}>{edu}</ListItem>
            ))}
          </List>
          <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}><strong>Experience:</strong></Typography>
          <List>
            {professor.experience?.map((exp, index) => (
              <ListItem key={index} sx={{ fontSize: '0.9rem' }}>{exp}</ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Publications Section */}
      <Card sx={{ width: '35%', margin: 2, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ fontSize: '1.5rem' }}>Publications</Typography>
          {currentPublications.map((publication, index) => (
            <Card sx={{ marginBottom: 2 }} key={index}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.2rem' }}>{publication.title || 'N/A'}</Typography>
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>Authors: {publication.authors || 'N/A'}</Typography>
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>Journal: {publication.journal || 'N/A'}</Typography>
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>Volume: {publication.volume || 'N/A'}</Typography>
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>Pages: {publication.pages || 'N/A'}</Typography>
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>Year: {publication.year || 'N/A'}</Typography>
                <Typography variant="body2">
                  <a href={`https://doi.org/${publication.doi}`} style={{ color: '#1976d2', fontSize: '0.9rem' }}>Read More</a>
                </Typography>
              </CardContent>
            </Card>
          ))}
          <Pagination
            count={Math.ceil((professor.publications?.length || 0) / publicationsPerPage)}
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

