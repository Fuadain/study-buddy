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
        sx={{ 
            background: '#00B2FF', 
            justifyContent: 'flex-start',
            height: {
                    xs: '110%',
                    sm: '100%'
                    }
            }}
    >
        <Grid item xs={12} sm={12} md={12} lg={6}>
            <Box>
                <Typography
                    sx={{
                        fontSize: {
                            xs: '35px',
                            sm: 'h3'
                        },
                        fontWeight: '500'
                    }}>
                    Study Buddy! <br />
                    AI For All <br />
                    And Your Go To When Quizzing!
                </Typography>
                <Typography variant="body1" 
                        sx={{
                            mt: {
                                xs:'20px',
                                lg:'50px'
                                }, 
                            color: '#000',
                            width: {
                                    xs:'100%',
                                    sm:'80%'
                                    } 
                            }}>
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

        <Grid item xs={12} sm={6} md={6}>
            <Box sx={{
                height:{
                        xs:'200px', 
                        sm: '400px', 
                        md: '50vh'
                        },
                mt: {
                    xs: '20px',
                    sm: '20px'
                },
                mb: {
                    xs: '20px',
                    sm: '0'
                }
                 }}>
            <img src={require('./logo.png')} alt={'logo'} height='100%' />
            </Box>
            
        </Grid>
    </Grid>
);

export default Body;
