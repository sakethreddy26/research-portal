// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';

// const ProfessorDetail = () => {
//   const { id } = useParams();
//   const [professor, setProfessor] = useState(null);
//   const [researchDetails, setResearchDetails] = useState(null);
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

//         const authorId = professorData.google_scholar_id;
//         const researchResponse = await fetch(`http://localhost:4000/v1/api/getResearchDetails/${authorId}`);
//         if (!researchResponse.ok) {
//           // throw new Error(`HTTP error! status: ${researchResponse.status}`);
//           alert("no scolar id found")
//           window.location.href="/professors"

//         }
//         const researchData = await researchResponse.json();
//         setResearchDetails(researchData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfessor();
//   }, [id]);

//   // Logic to paginate publications
//   const indexOfLastPublication = currentPage * publicationsPerPage;
//   const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
//   const currentPublications = researchDetails?.publications.slice(indexOfFirstPublication, indexOfLastPublication);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!professor) return <div>No Professor Found</div>;

//   return (
//     <div>
//       <Navbar />
//       <div className="opacity-60" style={{ backgroundImage: 'url(https://www.pesuacademy.com/Academy/images/login_bg_acdemy.jpg)', height: '120vh' }}>
//         <div className="flex  justify-evenly mx-auto p-4">
//           <div className="bg-white shadow-md rounded-lg h-fit p-6 w-2/5">
//             <h1 className="text-3xl h-auto font-bold mb-4">{professor.name}</h1>
//             <p className="text-gray-700 mb-2">Designation: {professor.designation?.join(', ') || 'N/A'}</p>
//             <p className="text-gray-700 mb-2">Department: {professor.department}</p>
//             <p className="text-gray-700 mb-2">Campus: {professor.campus}</p>
//             <p className="text-gray-700 mb-2">Email: {professor.email}</p>
//             <p className="text-gray-700 mb-2">Domains: {professor.domains?.join(', ') || 'N/A'}</p>
//             <p className="text-gray-700 mb-2">Responsibilities: {professor.responsibilities?.join(', ') || 'N/A'}</p>
//             <p className="text-gray-700 mb-2">Education: {professor.education?.join(', ') || 'N/A'}</p>
//             <p className="text-gray-700 mb-2">Experience: {professor.experience?.join(', ') || 'N/A'}</p>
//           </div>
//           {researchDetails && (
//             <div className="bg-white shadow-md rounded-lg  min-h-screen p-6  w-2/5">
//               <h2 className="text-xl font-bold mb-4">Research Details</h2>
//               <p className="text-gray-700 mb-2">Affiliations: {researchDetails.author.affiliations}</p>
//               <p className="text-gray-700 mb-2">Interests: {researchDetails.author.interests.join(', ')}</p>
//               <p className="text-gray-700 mb-2">h-index: {researchDetails.author.h_index}</p>
//               <p className="text-gray-700 mb-2">i10-index: {researchDetails.author.i10_index}</p>
//               <h3 className="text-lg font-bold mt-4 mb-2">Publications:</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {currentPublications.map((publication, index) => (
//                   <div key={index} className="bg-gray-100 p-4 rounded-lg">
//                     <h4 className="text-lg font-semibold">{publication.title}</h4>
//                     <p className="text-gray-700">Authors: {publication.authors}</p>
//                     <p className="text-gray-700">Publication: {publication.publication}</p>
//                     <p className="text-gray-700">Cited By: {publication.cited_by}</p>
//                     <p className="text-gray-700">Year: {publication.year}</p>
//                     <a href={publication.link} className="text-blue-500 hover:underline">Read More</a>
//                   </div>
//                 ))}
//               </div>
//               {/* Pagination */}
//               <div className="static mt-4">
//                 {Array.from({ length: Math.ceil(researchDetails.publications.length / publicationsPerPage) }, (_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => paginate(index + 1)}
//                     className={`mr-2 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfessorDetail;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';

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
//   const currentPublications = professor?.publications.slice(indexOfFirstPublication, indexOfLastPublication);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!professor) return <div>No Professor Found</div>;

//   return (
//     <div>
//       <Navbar />
//       <div className="opacity-60" style={{ backgroundImage: 'url(https://www.pesuacademy.com/Academy/images/login_bg_acdemy.jpg)', height: '120vh' }}>
//         <div className="flex justify-evenly mx-auto p-4">
//           <div className="bg-white shadow-md rounded-lg h-fit p-6 w-2/5">
//             <h1 className="text-3xl font-bold mb-4">{professor.name}</h1>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Designation: </span>{professor.designation || 'N/A'}</p>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Department:</span> {professor.department}</p>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Campus: </span>{professor.campus}</p>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Email: </span>{professor.email}</p>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Brief Expertise:</span> {professor.brief_expertise}</p>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Responsibilities:</span> {professor.responsibilities?.join(', ') || 'N/A'}</p>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Education:</span></p>
//             <ul className="list-disc ml-6 mb-2">
//               {professor.education?.map((edu, index) => (
//                 <li key={index} className="text-gray-700">{edu}</li>
//               ))}
//             </ul>
//             <p className="text-gray-700 mb-2">Experience:</p>
//             <ul className="list-disc ml-6 mb-2">
//               {professor.experience?.map((exp, index) => (
//                 <li key={index} className="text-gray-700">{exp}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="bg-white shadow-md rounded-lg min-h-screen p-6 w-2/5">
//             <h2 className="text-xl font-bold mb-4">Publications</h2>
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//               {currentPublications.map((publication, index) => (
//                 <div key={index} className="bg-gray-100 p-4 rounded-lg">
//                   <h4 className="text-lg font-semibold">{publication.title}</h4>
//                   <p className="text-gray-700">Authors: {publication.authors}</p>
//                   <p className="text-gray-700">Journal: {publication.journal}</p>
//                   <p className="text-gray-700">Volume: {publication.volume}</p>
//                   <p className="text-gray-700">Pages: {publication.pages}</p>
//                   <p className="text-gray-700">Year: {publication.year}</p>
//                   <a href={`https://doi.org/${publication.doi}`} className="text-blue-500 hover:underline">Read More</a>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-center mt-4">
//               <nav>
//                 <ul className="flex  flex-wrap -space-x-px">
//                   {Array.from({ length: Math.ceil(professor.publications.length / publicationsPerPage) }, (_, index) => (
//                     <li key={index}>
//                       <button
//                         onClick={() => paginate(index + 1)}
//                         className={`mr-2 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
//                       >
//                         {index + 1}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfessorDetail;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';

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

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!professor) return <div>No Professor Found</div>;

//   return (
//     <div>
//       <Navbar />
//       <div className="opacity-60" style={{
//         backgroundImage: "url(/img/pixelcut-export.jpg)",
//         backgroundSize: 'cover', // Ensures the image covers the entire div
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         width: '100vw', // Full viewport width
//         height: '100vh', // Full viewport height
//         overflow: 'hidden' // Hide any overflow
//     }}>
//         <div className="flex justify-evenly mx-auto p-4">
//           <div className="bg-white shadow-md rounded-lg h-fit p-6 w-2/5">
//             <div className="mb-4">
//               <img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg" alt="Professor" className=" h-auto rounded-md mb-2" />
//             </div>
//             <h1 className="text-3xl font-bold mb-4">{professor.name}</h1>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Designation: </span>{professor.designation || 'N/A'}</p>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Department:</span> {professor.department}</p>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Campus: </span>{professor.campus}</p>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Email: </span>{professor.email}</p>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Brief Expertise:</span> {professor.brief_expertise}</p>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Responsibilities:</span> {professor.responsibilities?.join(', ') || 'N/A'}</p>
//             <p className="text-gray-700 mb-2"><span className='font-bold'>Education:</span></p>
//             <ul className="list-disc ml-6 mb-2">
//               {professor.education?.map((edu, index) => (
//                 <li key={index} className="text-gray-700">{edu}</li>
//               ))}
//             </ul>
//             <p className="text-gray-700 mb-2">Experience:</p>
//             <ul className="list-disc ml-6 mb-2">
//               {professor.experience?.map((exp, index) => (
//                 <li key={index} className="text-gray-700">{exp}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="bg-white shadow-md rounded-lg min-h-screen p-6 w-2/5">
//             <h2 className="text-xl font-bold mb-4">Publications</h2>
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//               {currentPublications.map((publication, index) => (
//                 <div key={index} className="bg-gray-100 p-4 rounded-lg">
//                   <h4 className="text-lg font-semibold">{publication.title || 'N/A' }</h4>
//                   <p className="text-gray-700">Authors: {publication.authors || 'N/A'}</p>
//                   <p className="text-gray-700">Journal: {publication.journal || 'N/A'}</p>
//                   <p className="text-gray-700">Volume: {publication.volume || 'N/A'}</p>
//                   <p className="text-gray-700">Pages: {publication.pages || 'N/A'}</p>
//                   <p className="text-gray-700">Year: {publication.year || 'N/A'}</p>
//                   <a href={`https://doi.org/${publication.doi}`} className="text-blue-500 hover:underline">Read More</a>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-center mt-4">
//               <nav>
//                 <ul className="flex  flex-wrap -space-x-px">
//                   {Array.from({ length: Math.ceil((professor.publications?.length || 0) / publicationsPerPage) }, (_, index) => (
//                     <li key={index}>
//                       <button
//                         onClick={() => paginate(index + 1)}
//                         className={`mr-2 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
//                       >
//                         {index + 1}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfessorDetail;


//using mui

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
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <Navbar />
        <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
          <Card sx={{ width: '45%', margin: 2, padding: 2 }}>
            {/* <div className="absolute inset-0 bg-black opacity-40" style={{ zIndex: 1 }} /> */}
            <CardMedia
              component="img"
              // image="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
              alt="Professor"
              sx={{ borderRadius: '2px', marginBottom: 2 }}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>{professor.name}</Typography>
              <Typography variant="body1" gutterBottom><strong>Designation:</strong> {professor.designation || 'N/A'}</Typography>
              <Typography variant="body1" gutterBottom><strong>Department:</strong> {professor.department}</Typography>
              <Typography variant="body1" gutterBottom><strong>Campus:</strong> {professor.campus}</Typography>
              <Typography variant="body1" gutterBottom><strong>Email:</strong> {professor.email}</Typography>
              <Typography variant="body1" gutterBottom><strong>Brief Expertise:</strong> {professor.brief_expertise}</Typography>
              <Typography variant="body1" gutterBottom><strong>Responsibilities:</strong> {professor.responsibilities?.join(', ') || 'N/A'}</Typography>
              <Typography variant="body1" gutterBottom><strong>Education:</strong></Typography>
              <List>
                {professor.education?.map((edu, index) => (
                  <ListItem key={index}>{edu}</ListItem>
                ))}
              </List>
              <Typography variant="body1" gutterBottom><strong>Experience:</strong></Typography>
              <List>
                {professor.experience?.map((exp, index) => (
                  <ListItem key={index}>{exp}</ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
          <Card sx={{ width: '45%', margin: 2, padding: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Publications</Typography>
              {currentPublications.map((publication, index) => (
                <Card sx={{ marginBottom: 2 }} key={index}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{publication.title || 'N/A'}</Typography>
                    <Typography variant="body2">Authors: {publication.authors || 'N/A'}</Typography>
                    <Typography variant="body2">Journal: {publication.journal || 'N/A'}</Typography>
                    <Typography variant="body2">Volume: {publication.volume || 'N/A'}</Typography>
                    <Typography variant="body2">Pages: {publication.pages || 'N/A'}</Typography>
                    <Typography variant="body2">Year: {publication.year || 'N/A'}</Typography>
                    <Typography variant="body2">
                      <a href={`https://doi.org/${publication.doi}`} style={{ color: '#1976d2' }}>Read More</a>
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
