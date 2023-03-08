import React from 'react';
import './homepage.css';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
        >



            <div>
                <h1 style={{color:'white'}} >HOMEPAGE Nav!</h1>
            </div>
        </Stack>

    )
}