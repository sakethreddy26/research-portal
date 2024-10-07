import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Typography,
  Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';

const Professors = () => {
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDomain, setSelectedDomain] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('');
  const [selectedCampus, setSelectedCampus] = useState('');
  const [departments, setDepartments] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const professorsPerPage = 8;
  const navigate = useNavigate();

  const rrCampusDepartments = [
    'biotechnology',
    'civil',
    'computer-science-AIML',
    'computer-science',
    'electrical-&-electronics',
    'electronics-&-communications',
    'mechanical',
  ];

  const ecCampusDepartments = [
    'Computer Science',
    'Electronics & Communications',
  ];

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

  const handleCampusClick = (event, campus) => {
    setOpenDropdown(event.currentTarget);
    setSelectedCampus(campus);
    setSelectedDomain(''); // clear the selected domain
    if (campus === 'RR Campus') {
      setDepartments(rrCampusDepartments);
    } else if (campus === 'EC Campus') {
      setDepartments(ecCampusDepartments);
    }
  };

  const handleDomainClick = (dept) => {
    setSelectedDomain(dept);
    setOpenDropdown(null); // close the dropdown when a department is selected
    if (dept === 'Computer Science' && selectedCampus === 'EC Campus') {
      setSearchTerm(''); // Clear search term when Computer Science under EC Campus is selected
    }
  };

  const filteredProfessors = professors.filter((professor) =>
    (selectedDomain ? professor.department.toLowerCase() === selectedDomain.toLowerCase() : true) &&
    (selectedDesignation ? professor.designation?.toLowerCase().includes(selectedDesignation.toLowerCase()) : true) &&
    (searchTerm ? professor.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  const indexOfLastProfessor = currentPage * professorsPerPage;
  const indexOfFirstProfessor = indexOfLastProfessor - professorsPerPage;
  const currentProfessors = filteredProfessors.slice(indexOfFirstProfessor, indexOfLastProfessor);

  const paginate = (event, value) => setCurrentPage(value);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = (id) => {
    navigate(`/getProfessorbyid/${id}`);
  };

  if (loading) return <Box display="flex" justifyContent="center" alignItems="center" height="100vh"><CircularProgress /></Box>;
  if (error) return <Box display="flex" justifyContent="center" alignItems="center" height="100vh"><Typography variant="h6">Error: {error}</Typography></Box>;

  return (
    <Box>
      <Navbar />
      
      <Box
      
        className="opacity-80 h-screen"
        sx={{
          backgroundImage: "url(/img/pixelcut-export.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        
        <Box display="flex">
          <Box sx={{ width: '20%', bgcolor: 'white', opacity: 0.8, height: '100vh', p: 2 }}>
            <List>
              <ListItem button onClick={(event) => handleCampusClick(event, 'RR Campus')}>
                <ListItemText primary="RR Campus" />
              </ListItem>
              {selectedCampus === 'RR Campus' && (
                <Menu
                  anchorEl={openDropdown}
                  open={Boolean(openDropdown)}
                  onClose={() => setOpenDropdown(null)}
                >
                  {rrCampusDepartments.map((dept) => (
                    <MenuItem key={dept} onClick={() => handleDomainClick(dept)}>
                      {dept.replace(/-/g, ' ')}
                    </MenuItem>
                  ))}
                </Menu>
              )}
              <ListItem button onClick={(event) => handleCampusClick(event, 'EC Campus')}>
                <ListItemText primary="EC Campus" />
              </ListItem>
              {selectedCampus === 'EC Campus' && (
                <Menu
                  anchorEl={openDropdown}
                  open={Boolean(openDropdown)}
                  onClose={() => setOpenDropdown(null)}
                >
                  {ecCampusDepartments.map((dept) => (
                    <MenuItem key={dept} onClick={() => handleDomainClick(dept)}>
                      {dept.replace(/-/g, ' ')}
                    </MenuItem>
                  ))}
                </Menu>
              )}
              <ListItem>
                <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLScpkIXufj4p0svmqqlP-4kNIBKgMIsCs_V7gZHOv6NB33yuFw/viewform?usp=sf_link"
                  fullWidth
                  sx={{ color: 'blue' }}
                >
                  Apply to IRINS
                </Button>
              </ListItem>
            </List>
          </Box>

          <Box sx={{ flex: 1, p: 4 }}>
              <Paper component="form" sx={{ mb: 4, p: 2, display: 'flex', alignItems: 'center' }}>
                <InputBase
                  placeholder="Search professors..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  sx={{ ml: 1, flex: 1 }}
                />
                <IconButton type="submit" sx={{ p: '10px' }}>
                  <SearchIcon />
                </IconButton>
              </Paper>
            <Grid container spacing={2}>
              {currentProfessors.length > 0 ? (
                currentProfessors.map((professor) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={professor._id}>
                    <Card onClick={() => handleCardClick(professor._id)} sx={{ cursor: 'pointer', height: '100%' }}>
                      <Avatar
                        src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
                        alt="Professor"
                        sx={{ width: 100, height: 100, mb: 2 }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {professor.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Department: {professor.department || 'N/A'}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography variant="body1" sx={{ textAlign: 'center', width: '100%' }}>
                  No professors found.
                </Typography>
              )}
            </Grid>

            <Box display="flex" justifyContent="center" mt={4}>
              <Pagination className='bg-white'
                count={Math.ceil(filteredProfessors.length / professorsPerPage)}
                page={currentPage}
                onChange={paginate}
                color="secondary"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Professors;
