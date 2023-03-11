import React from 'react';
import { Stack, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <Stack
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={{
        flexDirection: { sx: "column", md: "row" }
      }}
    >


      <Box
        display='flex'
        alignItems='center'
        justifyItems='center'
        sx={{
          height: '90vh',
          backgroundColor: '#00B2FF',
          borderRadius: '0.5em'
        }}
      >
        <Box>
          <Typography
            sx={{
              color: '#000',
              backgroundColor: '#00B2FF',

            }}
            variant='h3'
            padding={2}
          >
            GET IN TOUCH WITH US!
          </Typography>
          <Typography
            sx={{
              color: '#000',
              backgroundColor: '#00B2FF',
            }}
            variant='body1'
            padding={2}
          >
            Whether article spirits new her covered hastily sitting her. Money witty <br />
            incididunt ut labore et dolore magna aliqua. <br /><br />
            +1 (321)-321-3210<br /><br />
            info@bayvalleytech.com<br /><br />
            545, Street 11, Block F<br />
            Modesto, California<br />
            <Link
              to='/'
            >
              <Button
                variant="contained"
                sx={{
                  color: 'black',
                  backgroundColor: 'red',
                  mt: '20px'
                }}
              >
                BACK TO HOMEPAGE
              </Button>
            </Link>
          </Typography>

        </Box>

      </Box>
      <Box
        display='flex'
        alignItems='center'
        justifyItems='center'
        sx={{
          height: '100vh',
          backgroundColor: 'none'
        }}
      >
        <img
          src={require('../logo.png')}
          alt={'logo'}
          style={{
            height: '500px',
            margin: '20px'
          }}

        />
      </Box>

    </Stack>
  )
}

export default Contact