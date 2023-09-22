import React from 'react';
import { Stack } from '@mui/material';
import { Navbar, Body, Footer } from './';

const Homepage = () => {
    let smallPhoneSideHeight;
    let mediumPhoneSideHeight;

    //Small res sideways phones
     if(window.innerWidth > 650 && window.innerWidth < 900 && window.innerHeight < 550)
     {  
        smallPhoneSideHeight = '300vh'
    } else{ 
        smallPhoneSideHeight = '100vh'
    };
 

    //for Samsung Galaxy A51/71 + Galaxy S20 Sideways res
    if((window.innerWidth === 914 || window.innerWidth === 915) && window.innerHeight === 412)
     {  
        mediumPhoneSideHeight = '150vh'
    } else{ 
        mediumPhoneSideHeight = '120vh'
    };

    return (
        <Stack  
            sx={{
                height: {
                        xs: '100vh',
                        sm: smallPhoneSideHeight,
                        md: mediumPhoneSideHeight, 
                        lg: '100vh'
                        },
                minWidth: '100%'
            }}>
            <Navbar />
            <Body />
            <Footer />
        </Stack>
    );
};

export default Homepage;
