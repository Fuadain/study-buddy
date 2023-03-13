import React from 'react';

import { Stack, Button, Box, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

const LearnMore = () => {
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

      <Box
        display='flex'
        alignItems='center'
        justifyItems='center'
        sx={{
          height: '100vh',
          backgroundColor: 'none',
          marginX: '-100px'
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
            Here is all you need to know <br /> about us
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
            books nor son add. Chicken age had evening believe but proceed pretend mrs. <br />
            At missed advice my it no sister. Miss told ham dull knew see she spot near can. <br />
            Spirit her entire her called.No opinions answered oh felicity is resolved <br />
            hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken.<br />
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

    </Stack>

  )
}

export default LearnMore