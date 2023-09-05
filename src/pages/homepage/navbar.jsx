import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <AppBar position="sticky" sx={{ background: 'gray'}}>
        <Toolbar sx={{ justifyContent:'space-between' }}>
            <Link to='/'>
                <h1 style={{
                            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                            color: 'white',
                            fontWeight: 500
                            }}>
                    Study Buddy
                </h1>
            </Link>
            <div>
            <Link to='/login' > 
                <Button variant="contained" sx={{ marginRight: '20px' }}>Login</Button>
            </Link>
            <Link to='/registration'>
                <Button variant="contained">Sign Up</Button>
            </Link>
            </div>
        </Toolbar>
    </AppBar>
);

export default Navbar;
