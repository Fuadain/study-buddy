import { Stack, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Form from './form';
import { Navbar, Footer } from '../';

const Contact = () => (
  <>
    <Stack height="100vh">
      <Navbar />
          <Stack
          width='100vw'
          height='100vh'
          alignItems='center'
          justifyContent='center'
          sx={{
            flexDirection: { sm: "column", md: "row" }
          }}
        >
            <Box
              sx={{
                backgroundColor: '#00B2FF',
                borderRadius: '0.5em',
                height: '100%',
                
              }}
            >
                <Typography variant='h3' sx={{ color: '#000' }} padding={2}>GET IN TOUCH WITH US!</Typography>
                <Typography variant='body1' sx={{ color: '#000', alignItems: 'start' }} padding={2} flexDirection='column'>
                  Whether article spirits new her covered hastily sitting her. Money witty<br />
                  incididunt ut labore et dolore magna aliqua.<br /><br />
                  +1 (321)-321-3210<br /><br />
                  info@bayvalleytech.com<br /><br />
                  545, Street 11, Block F<br />
                  Modesto, California<br />
                  <Link to='/'>
                    <Button variant="contained" sx={{ color: 'black', backgroundColor: 'red', mt: '20px' }}>
                      BACK TO HOMEPAGE
                    </Button>
                  </Link>
                </Typography>
            </Box>

            <Form />

          </Stack>
      <Footer />
    </Stack>
  </>
);


export default Contact;