// Faculty.jsx
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Main from './Main';
import { useLocation, useNavigate } from 'react-router-dom';

const Faculty = () => {
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  const professorsPerPage = 8;

  // Define campus and department options
  // This can be moved to a configuration file or fetched from an API
  const campuses = ['EC Campus', 'RR Campus'];
  const departments = {
    'EC Campus': ['Computer Science', 'Electronics & Communications'],
    'RR Campus': ['Mechanical', 'Civil', 'Chemical']
  };

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
        const response = await fetch('http://10.2.80.90:5000/v1/api/getAllprofs');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched professors:', data);
        
        // Check for department and campus values
        const uniqueDepartments = [...new Set(data.map(prof => prof.department))];
        const uniqueCampuses = [...new Set(data.map(prof => prof.campus))];
        console.log('Unique departments in data:', uniqueDepartments);
        console.log('Unique campuses in data:', uniqueCampuses);
        
        setProfessors(data);
      } catch (err) {
        console.error('Error fetching professors:', err);
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
    
    // Update URL with campus parameter
    const params = new URLSearchParams();
    if (campus) params.append('campus', campus);
    navigate(`/faculty?${params.toString()}`);
  };

  const handleDomainSelect = (dept) => {
    setSelectedDomain(dept);
    setCurrentPage(1);
    setSearchTerm('');
    
    // Update URL with both campus and department parameters
    const params = new URLSearchParams();
    if (selectedCampus) params.append('campus', selectedCampus);
    if (dept) params.append('department', dept);
    navigate(`/faculty?${params.toString()}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Filter professors based on selected campus, domain, and search term
  const filteredProfessors = professors.filter((professor) => {
    const matchesCampus = !selectedCampus || 
      professor.campus?.toLowerCase() === selectedCampus.toLowerCase();
    
    const matchesDomain = !selectedDomain || 
      professor.department?.toLowerCase() === selectedDomain.toLowerCase();
    
    const matchesSearch = !searchTerm || 
      professor.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (professor.department && professor.department.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCampus && matchesDomain && matchesSearch;
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <Sidebar 
        campuses={campuses}
        departments={departments}
        selectedCampus={selectedCampus}
        selectedDomain={selectedDomain}
        handleCampusSelect={handleCampusSelect}
        handleDomainSelect={handleDomainSelect}
      />
      <Main
        professors={filteredProfessors}
        totalProfessorsCount={professors.length}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        currentPage={currentPage}
        professorsPerPage={professorsPerPage}
        handleSearchChange={handleSearchChange}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
};

export default Faculty;
