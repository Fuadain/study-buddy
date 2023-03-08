import React from 'react';
import { Stack, Button } from '@mui/material';

const Footer = () =>  (
    <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{ position: 'sticky', background: 'gray', bottom: 0, justifyContent: 'flex-start' }}
  >
    
    <Button variant="contained">Contact Us</Button>
    
  </Stack>
  )


export default Footer