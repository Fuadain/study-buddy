import React from 'react';
import { Stack, Typography, Button, Box } from '@mui/material';

const Body = () => (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{ position: 'sticky', background: '#00B2FF', top: 0, justifyContent: 'flex-start' }}
    >
        <Box>

            <Typography variant='h3'>
                Study Buddy! <br />
                AI For All <br />
                And Your Go To When Quizzing!
            </Typography>
            <Typography variant='body1' sx={{ mt: '50px' }}>

                As a verb, quiz means to ask a series of questions. A teacher might quiz his students on the material covered  <br />
                in lecture the day before. Or the day after, who knows what a teacher really thinks!

            </Typography>
            <Button variant="contained" sx={{ backgroundColor: 'red', mt: '20px' }}>Learn More</Button>
        </Box>

        <img
            src={require('./logo.png')}
            alt={'logo'}
            style={{
                height: '500px',
                margin: '20px'
            }}

        />
    </Stack>

)


export default Body