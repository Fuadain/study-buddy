import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, Box } from '@mui/material';

const Body = () => (
    <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        sx={{ background: '#00B2FF', justifyContent: 'flex-start', height: '100%' }}
    >
        <Grid item xs={12} sm={6}>
            <Box>
                <Typography variant="h3">
                    Study Buddy! <br />
                    AI For All <br />
                    And Your Go To When Quizzing!
                </Typography>
                <Typography variant="body1" sx={{ mt: '50px', color: '#000' }}>
                    As a verb, quiz means to ask a series of questions. A teacher might quiz his students on the material covered{' '}
                    in lecture the day before. Or the day after, who knows what a teacher really thinks!
                </Typography>
                <Link to="/learnMore">
                    <Button variant="contained" sx={{ backgroundColor: 'red', mt: '20px' }}>
                        Learn More
                    </Button>
                </Link>
            </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
            <Box height={{xs:'200px', sm: '400px', md: '500px'}}>
            <img src={require('./logo.png')} alt={'logo'} height='100%' />
            </Box>
            
        </Grid>
    </Grid>
);

export default Body;
