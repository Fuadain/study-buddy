import { Stack, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Form from './form';

const Contact = () => (
  <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} alignItems='center' justifyContent='center'>
    <Box sx={{ height: '90vh', backgroundColor: '#00B2FF', borderRadius: '0.5em' }}>
      <Box>
        <Typography variant='h3' sx={{ color: '#000' }} padding={2}>GET IN TOUCH WITH US!</Typography>
        <Typography variant='body1' sx={{ color: '#000' }} padding={2}>
          Whether article spirits new her covered hastily sitting her. Money witty<br/>
          incididunt ut labore et dolore magna aliqua.<br/><br/>
          +1 (321)-321-3210<br/><br/>
          info@bayvalleytech.com<br/><br/>
          545, Street 11, Block F<br/>
          Modesto, California<br/>
          <Link to='/'>
            <Button variant="contained" sx={{ color: 'black', backgroundColor: 'red', mt: '20px' }}>
              BACK TO HOMEPAGE
            </Button>
          </Link>
        </Typography>
      </Box>
    </Box>
    <Form />
  </Stack>
);

export default Contact;