import React from 'react';
import { Stack, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { GifBox } from '@mui/icons-material';

const LearnMore = () => { 
  let smallPhoneSidewaysHeight;

  if(window.innerWidth > 650 && window.innerWidth < 900 && window.innerHeight < 550)
  {  
     smallPhoneSidewaysHeight = '250vh'
 } else{ 
     smallPhoneSidewaysHeight = '120vh'
 };

 if((window.innerWidth === 914 || window.innerWidth === 915) && window.innerHeight === 412)
 {  
    smallPhoneSidewaysHeight = '150vh'
};


  return (
    <Stack
      sx={{
        width: {
              xs: '100%',
              md: '100vw'
              },
        height: {
                xs: '100vh',
                sm: smallPhoneSidewaysHeight
                },
        minHeight:'100vh',
        display:'flex',
        justifyContent:{
                        xs:'flex-start',
                        sm:'center'
                      },
        alignItems:'center',
        flexDirection: { 
                        xs: "column", 
                        md: "row" 
                      },
        backgroundColor: 'gray',
        padding: 0,
        margin: 0
      }}
    >
      {/* Img container */}
      <Box
        display='flex'
        alignItems='center'
        justifyItems='center'
        sx={{
          width: {
            xs: '90%',
            sm: '70%',
            md: '70%',
            lg: '50%'
          },
          maxWidth: '700px',
          backgroundColor: 'none',
          padding: 0,
          margin: {
                    xs:'60px 0 40px',
                    sm: 0
                  }, 
          justifyContent:{
                          xs: 'center',
                          md:'flex-start',
                          lg:'center'
                        }
        }}
      >
        <img
          src={require('../logo.png')}
          alt={'logo'}
          style={{
            height: 'auto',
            width: '100%'
          }}
          className='learn-more-image'    
        />
      </Box>
      
      {/* Text container */}
      <Box
        sx={{
          backgroundColor: 'none',
          margin: '0 0 50px',
          ml: {
              xs: 0,
              md: '-100px'
              },
              width: {
                      xs:'90%', 
                      sm: '90%', 
                      md:'80%',
                      lg: '40%'
                     }
        }}
      >
        {/* Text Box */}
        <Box
        sx={{ 
            width: '100%',
            backgroundColor: '#00B2FF',
            alignItems: 'center'
            }}>
          <Typography
            variant='h3'
            padding={2}
            sx={{
              color: '#000',
              backgroundColor: '#00B2FF',
              fontSize: {
                xs: '30px',
                sm: 'h3'
              }
            }}
          >
            Here is all you need to know about us
          </Typography>
          <Typography
            sx={{
              color: '#000',
              backgroundColor: '#00B2FF'
            }}
            variant='body1'
            padding={2}
            flexDirection='column'
          >
            Whether article spirits new her covered hastily sitting her. Money witty 
            books nor son add. Chicken age had evening believe but proceed pretend mrs. 
            At missed advice my it no sister. Miss told ham dull knew see she spot near can.
            Spirit her entire her called.No opinions answered oh felicity is resolved 
            hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken.
           
          </Typography>
          <Link to='/'>
              <Button
                variant="contained"
                sx={{
                  color: 'black',
                  backgroundColor: 'red',
                  m: 2,
                  alignSelf:'center'
                }}
              >
                BACK TO HOMEPAGE
              </Button>
            </Link>
        </Box>

      </Box>

    </Stack>

  )
}

export default LearnMore