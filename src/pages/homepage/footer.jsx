import React from 'react';
import { Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{ position: 'sticky', background: 'gray', bottom: 0, justifyContent: 'flex-start' }}
    >
        <Link
          to='/contact'
        >
          
            <Button variant="contained">Contact Us</Button>
        
        </Link>

    </Stack>
)


export default Footer