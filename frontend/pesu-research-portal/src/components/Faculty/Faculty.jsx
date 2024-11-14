// Faculty.jsx
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Main from './Main';
import { useLocation } from 'react-router-dom';

const Faculty = () => {
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  const professorsPerPage = 8;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const campus = queryParams.get('campus');
    const department = queryParams.get('department');

    if (campus) {
      setSelectedCampus(campus);
    } else {
      setSelectedCampus('');
    }

    if (department) {
      setSelectedDomain(department);
    } else {
      setSelectedDomain('');
    }
    setCurrentPage(1);

    const fetchProfessors = async () => {
      try {
        const response = await fetch('http://localhost:4000/v1/api/getAllprofs');
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
  }, [location.search]);

  const handleCampusSelect = (campus) => {
    setSelectedCampus(campus);
    setSelectedDomain('');
    setCurrentPage(1);
    setSearchTerm('');
  };

  const handleDomainSelect = (dept) => {
    setSelectedDomain(dept);
    setCurrentPage(1);
    setSearchTerm('');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Filtering Professors
  const filteredProfessors = professors.filter((professor) =>
    (selectedCampus ? professor.campus.trim().toLowerCase() === selectedCampus.trim().toLowerCase() : true) &&
    (selectedDomain ? professor.department.trim().toLowerCase() === selectedDomain.trim().toLowerCase() : true) &&
    (searchTerm ? professor.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  const totalProfessorsCount = filteredProfessors.length;

  return (
    <Box sx={{ minHeight: '100vh', backgroundImage: 'url(/img/pixelcut-export.jpg)', backgroundSize: 'cover' }}>
      <Box display="flex" sx={{ minHeight: '100vh',backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: { xs: '100%', md: '20%' },
            borderRight: { xs: 'none', md: '1px solid #ccc' },
            p: 2,
          }}
        >
          <Sidebar
            selectedCampus={selectedCampus}
            selectedDomain={selectedDomain}
            handleCampusSelect={handleCampusSelect}
            handleDomainSelect={handleDomainSelect}
          />
        </Box>

        {/* Main Content */}
        <Box sx={{ flex: 1, p: 3 }}>
          <Main
            professors={filteredProfessors}
            totalProfessorsCount={totalProfessorsCount}
            loading={loading}
            error={error}
            searchTerm={searchTerm}
            currentPage={currentPage}
            professorsPerPage={professorsPerPage}
            handleSearchChange={handleSearchChange}
            handlePageChange={handlePageChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Faculty;
