import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

const AccordionUsage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="mt-8 space-y-4">
        <Accordion 
          sx={{
            border: '1px solid #E0E0E0',
            boxShadow: 'none',
            '&:before': { display: 'none' },
            '&:hover': {
              backgroundColor: '#FFFDE7', 
            },
            '&.Mui-expanded': {
              backgroundColor: '#FFFDE7', 
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fontSize: '2rem', color: '#000' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              backgroundColor: '#F5F5F5',
              '& .MuiAccordionSummary-content': {
                margin: '12px 0',
              },
              '&.Mui-expanded': {
                marginBottom: '0',
                backgroundColor: '#FFEB3B', 
              },
            }}
          >
            <Typography sx={{ fontWeight: 'bold', color: '#000' }}>
              VISION STATEMENT
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#fff',
              color: '#666',
              padding: '16px 24px',
              borderTop: '1px solid #E0E0E0',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <Typography>
              To be a Preferred Print Solutions Company.
            </Typography>
          </AccordionDetails>
        </Accordion>

    
        <Accordion
          sx={{
            border: '1px solid #E0E0E0',
            boxShadow: 'none',
            '&:before': { display: 'none' },
            '&:hover': {
              backgroundColor: '#FFFDE7', 
            },
            '&.Mui-expanded': {
              backgroundColor: '#FFFDE7', 
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fontSize: '2rem', color: '#000' }} />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{
              backgroundColor: '#F5F5F5',
              '& .MuiAccordionSummary-content': {
                margin: '12px 0',
              },
              '&.Mui-expanded': {
                marginBottom: '0',
                backgroundColor: '#FFEB3B', 
              },
            }}
          >
            <Typography sx={{ fontWeight: 'bold', color: '#000' }}>
              MISSION STATEMENT
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#fff',
              color: '#666',
              padding: '16px 24px',
              borderTop: '1px solid #E0E0E0',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <Typography>
              SAP Print Solutions aims to invest in technology that improves quality and efficiency.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </ThemeProvider>
  );
};

export default AccordionUsage;