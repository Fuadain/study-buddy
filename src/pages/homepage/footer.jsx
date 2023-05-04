import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => (
    <AppBar position="sticky" sx={{ background: 'gray' }}>
        <Toolbar sx={{ justifyContent: 'flex-start' }}>
            <Link to='/contact'>
                <Button variant="contained">Contact Us</Button>
            </Link>
        </Toolbar>
    </AppBar>
);

export default Footer;
