import React from 'react';
import { AppBar, Toolbar, Button, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <AppBar position="sticky" 
            sx={{ 
                background: 'gray'
                }}>
        <Toolbar sx={{ justifyContent:'space-between' }}>
            <Link to='/'>
                <Typography sx={{
                            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                            color: 'white',
                            fontWeight: 500,
                            fontSize: {
                                        xs: '1.3rem',
                                        sm: 'h4'
                                    }
                            }}>
                    Study Buddy
                </Typography>
            </Link>
            <Stack
                sx={{
                    maxWidth: {
                                xs: '10rem',
                                sm: '15rem'
                             },
                    width: {
                            xs: '220px',
                            sm: 'auto'
                            },
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <Link to='/login' > 
                    <Button variant="contained" 
                        sx={{ 
                            mr: {
                                xs: 0,
                                sm:'20px'
                                },
                            height: {xs:'30px', sm: 'auto'},
                            width: {xs:'20px', sm: 'auto'}
                            }}>
                            Login
                    </Button>
                </Link>
                <Link to='/registration'>
                    <Button variant="contained"
                        sx={{
                            ml: '0px',
                            height: {xs:'30px', sm: 'auto'},
                            width: {xs:'auto', sm: 'auto'}
                        }}>
                        Sign Up
                    </Button>
                </Link>
            </Stack>
        </Toolbar>
    </AppBar>
);

export default Navbar;
