import * as React from 'react';
import {
  Navbar, Sidebar, EmailSettings, NameSettings, PasswordSettings, PictureSettings, VerificationSettings
} from './';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Account = () => {
  let pageName = "Account";

  const [expanded, setExpanded] = React.useState('');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Navbar pageName={pageName}/>
      <Box flexDirection='row'>
        <Sidebar />
        <Box sx={{
          ml: '20vw', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }} height='90vh'>
          <Box>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Profile Picture Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <PictureSettings />
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>Name Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <NameSettings />
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Password Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <PasswordSettings />
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <Typography>Email Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <EmailSettings />
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                <Typography>2-Step Verification Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <VerificationSettings />
              </AccordionDetails>
            </Accordion>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Account;