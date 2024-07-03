import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const ProfessorDetail = () => {
  const { id } = useParams();
  const [professor, setProfessor] = useState(null);
  const [researchDetails, setResearchDetails] = useState(null);
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

        const authorId = professorData.author_id;
        const researchResponse = await fetch(`http://localhost:4000/v1/api/getResearchDetails/${authorId}`);
        if (!researchResponse.ok) {
          throw new Error(`HTTP error! status: ${researchResponse.status}`);
        }
        const researchData = await researchResponse.json();
        setResearchDetails(researchData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessor();
  }, [id]);

  // Logic to paginate publications
  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = researchDetails?.publications.slice(indexOfFirstPublication, indexOfLastPublication);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!professor) return <div>No Professor Found</div>;

  return (
    <div>
      <Navbar />
      <div className="opacity-60" style={{ backgroundImage: 'url(https://www.pesuacademy.com/Academy/images/login_bg_acdemy.jpg)', height: '120vh' }}>
        <div className="flex  justify-evenly mx-auto p-4">
          <div className="bg-white shadow-md rounded-lg h-fit p-6 w-2/5">
            <h1 className="text-3xl h-auto font-bold mb-4">{professor.name}</h1>
            <p className="text-gray-700 mb-2">Designation: {professor.designation?.join(', ') || 'N/A'}</p>
            <p className="text-gray-700 mb-2">Department: {professor.department}</p>
            <p className="text-gray-700 mb-2">Campus: {professor.campus}</p>
            <p className="text-gray-700 mb-2">Email: {professor.email}</p>
            <p className="text-gray-700 mb-2">Domains: {professor.domains?.join(', ') || 'N/A'}</p>
            <p className="text-gray-700 mb-2">Responsibilities: {professor.responsibilities?.join(', ') || 'N/A'}</p>
            <p className="text-gray-700 mb-2">Education: {professor.education?.join(', ') || 'N/A'}</p>
            <p className="text-gray-700 mb-2">Experience: {professor.experience?.join(', ') || 'N/A'}</p>
          </div>
          {researchDetails && (
            <div className="bg-white shadow-md rounded-lg  min-h-screen p-6  w-2/5">
              <h2 className="text-xl font-bold mb-4">Research Details</h2>
              <p className="text-gray-700 mb-2">Affiliations: {researchDetails.author.affiliations}</p>
              <p className="text-gray-700 mb-2">Interests: {researchDetails.author.interests.join(', ')}</p>
              <p className="text-gray-700 mb-2">h-index: {researchDetails.author.h_index}</p>
              <p className="text-gray-700 mb-2">i10-index: {researchDetails.author.i10_index}</p>
              <h3 className="text-lg font-bold mt-4 mb-2">Publications:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentPublications.map((publication, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold">{publication.title}</h4>
                    <p className="text-gray-700">Authors: {publication.authors}</p>
                    <p className="text-gray-700">Publication: {publication.publication}</p>
                    <p className="text-gray-700">Cited By: {publication.cited_by}</p>
                    <p className="text-gray-700">Year: {publication.year}</p>
                    <a href={publication.link} className="text-blue-500 hover:underline">Read More</a>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="static mt-4">
                {Array.from({ length: Math.ceil(researchDetails.publications.length / publicationsPerPage) }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`mr-2 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessorDetail;
