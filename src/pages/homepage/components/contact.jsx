import { Stack, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Form from './form';
import { Navbar, Footer } from '../';

const Contact = () => (
  <>
    <Stack  sx={{
            height:{
                  xs:'160vh',
                  sm: '100vh'
                }
              }}>
      <Navbar />
          <Stack
          width='100vw'
          justifyContent='space-between'
          sx={{
            height:{
                  xs:'100%',
                  sm: '100vh'
                },
            flexDirection: { 
                            sm: "column", 
                            md: "row" 
                          },
            alignItems: 'center'
          }}
        >
            <Box
              sx={{
                display: 'flex',
                backgroundColor: '#00B2FF',
                height: {
                        xs:'100vh', 
                        sm: '100%'
                      },
                width: {
                        xs:'100%',
                        md:'50%'
                      },
                border: '2px solid green',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
                <Typography  
                    sx={{ 
                        color: '#000',
                        width: '80%',
                        padding: 2,
                        fontWeight: 600,
                        fontSize: {
                          xs: '30px',
                          md:'h4'
                        },
                        textAlign: 'center'
                        }}>
                  GET IN TOUCH WITH US!
                </Typography>
                <Typography variant='body1' 
                    sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 2,
                        color: '#000',
                        width: {sm:'45%'}, 
                        alignItems: 'center' 
                      }}  >
                        Whether article spirits new her covered hastily sitting her. Money witty
                        incididunt ut labore et dolore magna aliqua.<br /><br />
                        +1 (321)-321-3210<br /><br />
                        info@bayvalleytech.com<br /><br />
                        545, Street 11, Block F<br />
                        Modesto, California<br />
                        <Link to='/'>
                          <Button variant="contained" 
                              sx={{ 
                                  color: 'black', 
                                  backgroundColor: 'red', 
                                  mt: '20px' 
                                  }}>
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