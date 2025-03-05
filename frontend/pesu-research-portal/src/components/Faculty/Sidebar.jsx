// Sidebar.jsx
import React from 'react';
import { Box, Typography, List, ListItemButton, ListItemText, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const Sidebar = ({ selectedCampus, selectedDomain, handleCampusSelect, handleDomainSelect }) => {
  const campuses = ['RR Campus', 'EC Campus'];
  const departmentsByCampus = {
    'RR Campus': [
      'Biotechnology',
      'Computer Science (AIML)',
      'Computer Science',
      'Electrical & Electronics',
      'Electronics & Communications',
      'Mechanical',
    ],
    'EC Campus': [
      'Computer Science',
      'Electronics & Communications',
    ],
  };

  return (
    <Box
  sx={{
    backgroundColor: "#f5f5f5", // Light gray background
    padding: "16px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
  }}
>
  {/* Styled Title */}
  <Typography
    variant="h6"
    gutterBottom
    sx={{
      backgroundColor: "#f5f5f5", // Primary blue
      color: "#1976d2",
      padding: "8px",
      borderRadius: "4px",
      textAlign: "center",
    }}
  >
    Filter By
  </Typography>

  {/* Campus Filter */}
  <Accordion
    defaultExpanded
    sx={{
      backgroundColor: "white",
      boxShadow: "none",
      border: "1px solid #ddd",
      borderRadius: "8px",
      marginTop: "8px",
    }}
  >
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography variant="subtitle1" fontWeight="bold">Campus</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <List>
        {campuses.map((campus) => (
          <ListItemButton
            key={campus}
            selected={selectedCampus === campus}
            onClick={() => handleCampusSelect(campus)}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#1976d2",
                color: "white",
                fontWeight: "bold",
              },
              borderRadius: "4px",
              marginBottom: "4px",
            }}
          >
            <ListItemText primary={campus} />
          </ListItemButton>
        ))}
      </List>
    </AccordionDetails>
  </Accordion>

  {/* Department Filter */}
  {selectedCampus && (
    <Accordion
      defaultExpanded
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginTop: "8px",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="subtitle1" fontWeight="bold">Department</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {departmentsByCampus[selectedCampus].map((dept) => (
            <ListItemButton
              key={dept}
              selected={selectedDomain === dept}
              onClick={() => handleDomainSelect(dept)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#1976d2",
                  color: "white",
                  fontWeight: "bold",
                },
                borderRadius: "4px",
                marginBottom: "4px",
              }}
            >
              <ListItemText primary={dept} />
            </ListItemButton>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  )}
</Box>

  );
};

export default Sidebar;
