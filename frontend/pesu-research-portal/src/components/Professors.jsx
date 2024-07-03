import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Professors = () => {
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const professorsPerPage = 20; // 5 rows * 4 columns
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await fetch('http://localhost:4000/v1/api/getProfessors');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProfessors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessors();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProfessors = professors.filter((professor) =>
    professor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    professor.designation.join(', ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProfessor = currentPage * professorsPerPage;
  const indexOfFirstProfessor = indexOfLastProfessor - professorsPerPage;
  const currentProfessors = filteredProfessors.slice(indexOfFirstProfessor, indexOfLastProfessor);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCardClick = (id) => {
    navigate(`/getProfessorbyid/${id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="opacity-80" style={{ backgroundImage: 'url(https://www.pesuacademy.com/Academy/images/login_bg_acdemy.jpg)', height: '100vh' }}>
        <div className="container px-4">
          <h1 className="text-3xl font-bold mb-6">Professors</h1>
          <input
            type="text"
            placeholder="Search professors..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProfessors.map((professor) => (
              <div key={professor._id} className="bg-white shadow-md rounded-lg p-6 cursor-pointer" onClick={() => handleCardClick(professor._id)}>
                <h2 className="text-xl font-semibold mb-2">{professor.name}</h2>
                <p className="text-gray-700 mb-1">Designation: {professor.designation?.join(', ') || 'N/A'}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <nav>
            <ul className="inline-flex -space-x-px">
              {Array.from({ length: Math.ceil(filteredProfessors.length / professorsPerPage) }, (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-3 py-2 leading-tight ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-200'} rounded-lg`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Professors;
