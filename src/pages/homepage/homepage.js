import React from 'react';
import { Stack } from '@mui/material';
import { Navbar, Body, Footer } from './';

const Homepage = () => {
    return (
        <Stack height="100vh">
            <Navbar />
            <Body />
            <Footer />
        </Stack>
    );
};

export default Homepage;
