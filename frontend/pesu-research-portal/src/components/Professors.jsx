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
  Paper,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const Professors = () => {
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDomain, setSelectedDomain] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCampus, setSelectedCampus] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  const professorsPerPage = 8;
  const navigate = useNavigate();

  const rrCampusDepartments = [
    'Biotechnology',
    'Computer Science (AIML)',
    'Computer Science',
    'Electrical & Electronics',
    'Electronics & Communications',
    'Mechanical',
  ];

  const ecCampusDepartments = [
    'Computer Science',
    'Electronics & Communications',
  ];

  useEffect(() => {
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
  }, []);

  const handleCampusClick = (event, campus) => {
    setOpenDropdown(event.currentTarget);
    setSelectedCampus(campus);
    setSelectedDomain('');
  };

  const handleDomainClick = (dept) => {
    setSelectedDomain(dept);
    setOpenDropdown(null);
    setSearchTerm('');
  };

  const filteredProfessors = professors.filter((professor) =>
    (selectedDomain ? professor.department.toLowerCase() === selectedDomain.toLowerCase() : true) &&
    (searchTerm ? professor.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  const currentProfessors = filteredProfessors.slice(
    (currentPage - 1) * professorsPerPage,
    currentPage * professorsPerPage
  );

  const paginate = (event, value) => setCurrentPage(value);
  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handleCardClick = (email) => navigate(`/getProfessorbyemail/${email}`);

  if (loading) return <Box display="flex" justifyContent="center" alignItems="center" height="100vh"><CircularProgress /></Box>;
  if (error) return <Box display="flex" justifyContent="center" alignItems="center" height="100vh"><Typography variant="h6">Error: {error}</Typography></Box>;

  return (
    <Box>
      <Navbar />
      <Box
        className="grid grid-cols-4 gap-2"
        style={{
          backgroundImage: "url(/img/pixelcut-export.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div className="col-span-1 p-10 bg-white bg-opacity-80 w-4/5 h-full justify-evenly">
          <ul className="font-serif text-lg leading-10 cursor-pointer flex flex-col items-center justify-center">
            <li onClick={(event) => handleCampusClick(event, 'RR Campus')}>RR Campus</li>
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
            <li onClick={(event) => handleCampusClick(event, 'EC Campus')}>EC Campus</li>
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
            <li>
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLScpkIXufj4p0svmqqlP-4kNIBKgMIsCs_V7gZHOv6NB33yuFw/viewform?usp=sf_link"
                fullWidth
                sx={{ color: 'blue' }}
              >
                Apply to IRINS
              </Button>
            </li>
          </ul>
        </div>

        <Box className="col-span-3 p-4 overflow-y-auto" sx={{ height: 'calc(100vh - 64px)' }}> {/* Adjust height as needed */}
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
          <Grid container spacing={3} sx={{ mb: 4 }}> {/* Add margin bottom */}
            {currentProfessors.length > 0 ? (
              currentProfessors.map((professor) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={professor.email}>
                  <StyledCard onClick={() => handleCardClick(professor.email)}>
                    <CardContent>
                      <Avatar
                        src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
                        alt="Professor"
                        sx={{ width: 100, height: 100, mb: 2, mx: 'auto' }}
                      />
                      <Typography gutterBottom variant="h6" component="div" align="center">
                        {professor.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        {professor.department || 'N/A'}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </Grid>
              ))
            ) : (
              <Typography variant="body1" sx={{ textAlign: 'center', width: '100%' }}>
                No professors found.
              </Typography>
            )}
          </Grid>

          <Box display="flex" justifyContent="center" sx={{ position: 'sticky', bottom: 16, pb: 2 }}>
            <Pagination
              count={Math.ceil(filteredProfessors.length / professorsPerPage)}
              page={currentPage}
              onChange={paginate}
              color="primary"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Professors;