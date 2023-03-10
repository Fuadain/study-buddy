import React from 'react';

import { Stack, Button, Box, Typography } from '@mui/material';

const LearnMore = () => {
  return (
    <Stack
    sx={{
        flexDirection: { sx: "column", md: "row" }
      }}
    >
        <Box
        sx={{
          height: '80vh',
          backgroundColor: 'black'
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
        sx={{
          height: '100vh',
          backgroundColor: 'gray'
        }}
      >
        <Typography sx={{color: 'white'}}>
            Hello
        </Typography>
      </Box>

    </Stack>
    
  )
}

export default LearnMore