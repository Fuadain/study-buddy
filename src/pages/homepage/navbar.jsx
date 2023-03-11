import React from 'react';
import { Stack, Button } from '@mui/material';

const Navbar = () => (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{ position: 'sticky', background: 'gray', top: 0, justifyContent: 'flex-end' }}
    >

        <Link to='/login'>
            <Button variant="contained" sx={{ marginRight: '20px' }}>login</Button>
        </Link>
        <Button variant="contained">Sign Up</Button>

    </Stack>
);

export default Navbar;
