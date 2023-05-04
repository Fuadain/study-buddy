import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <AppBar position="sticky" sx={{ background: 'gray' }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <Link to='/login'>
                <Button variant="contained" sx={{ marginRight: '20px' }}>Login</Button>
            </Link>
            <Button variant="contained">Sign Up</Button>
        </Toolbar>
    </AppBar>
);

export default Navbar;
