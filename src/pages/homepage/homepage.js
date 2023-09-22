import React from 'react';
import { Stack } from '@mui/material';
import { Navbar, Body, Footer } from './';

const Homepage = () => {
    return (
        <Stack  
            sx={{
                height: {
                        xs: '100vh',
                        sm: '100vh',
                        md: '120vh',
                        lg: '100vh'
                        },
                minWidth: '100%'
            }}>
            <Navbar />
            <Body />
            <Footer />
        </Stack>
    );
};

export default Homepage;
