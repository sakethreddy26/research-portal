// Main.jsx
import React from 'react';
import {
  Box,
  Paper,
  InputBase,
  IconButton,
  Grid,
  Typography,
  CircularProgress,
  Pagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const StyledCard = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
}));

const Main = ({
  professors,
  totalProfessorsCount,
  loading,
  error,
  searchTerm,
  currentPage,
  professorsPerPage,
  handleSearchChange,
  handlePageChange,
}) => {
  const navigate = useNavigate();

  const currentProfessors = professors.slice(
    (currentPage - 1) * professorsPerPage,
    currentPage * professorsPerPage
  );

  const handleCardClick = (email) => navigate(`/faculty/${email}`);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Typography variant="h6">Error: {error}</Typography>
      </Box>
    );

  return (
    <Box>
      {/* Search Bar */}
      <Paper
        component="form"
        sx={{ mb: 4, p: '2px 4px', display: 'flex', alignItems: 'center' }}
        onSubmit={(e) => e.preventDefault()}
      >
        <InputBase
          placeholder="Search Professors..."
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ ml: 1, flex: 1 }}
        />
        <IconButton type="button" sx={{ p: '10px' }}>
          <SearchIcon />
        </IconButton>
      </Paper>

      {/* Professors Grid */}
      {currentProfessors.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {currentProfessors.map((professor) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={professor.email}>
                <StyledCard onClick={() => handleCardClick(professor.email)}>
                  <CardContent>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 100,
                        height: 100,
                        mb: 2,
                        mx: 'auto',
                        fontSize: 60,
                      }}
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
                    <Typography gutterBottom variant="h6" component="div" align="center">
                      {professor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      {professor.designation || 'Professor'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      {professor.department || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      {professor.campus}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          <Box mt={4} display="flex" justifyContent="center">
            <Pagination
              count={Math.ceil(totalProfessorsCount / professorsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </Box>
        </>
      ) : (
        <Typography variant="h6" align="center">
          No Professors Found
        </Typography>
      )}
    </Box>
  );
};

export default Main;
