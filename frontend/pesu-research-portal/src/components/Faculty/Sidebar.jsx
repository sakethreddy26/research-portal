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
    <Box>
      <Typography variant="h6" gutterBottom>
        Filter By
      </Typography>

      {/* Campus Filter */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="subtitle1">Campus</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {campuses.map((campus) => (
              <ListItemButton
                key={campus}
                selected={selectedCampus === campus}
                onClick={() => handleCampusSelect(campus)}
              >
                <ListItemText primary={campus} />
              </ListItemButton>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Department Filter */}
      {selectedCampus && (
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle1">Department</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {departmentsByCampus[selectedCampus].map((dept) => (
                <ListItemButton
                  key={dept}
                  selected={selectedDomain === dept}
                  onClick={() => handleDomainSelect(dept)}
                >
                  <ListItemText primary={dept} />
                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      )}

      {/* Apply to IRINS Button */}
      {/* <Box mt={4} textAlign="center">
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLScpkIXufj4p0svmqqlP-4kNIBKgMIsCs_V7gZHOv6NB33yuFw/viewform?usp=sf_link"
          variant="contained"
          color="primary"
        >
          Apply to IRINS
        </Button>
      </Box> */}
    </Box>
  );
};

export default Sidebar;
