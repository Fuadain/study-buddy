import React from 'react';
import { Stack, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { GifBox } from '@mui/icons-material';

const LearnMore = () => {
  return (
    <Stack
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={{
        width: {
          xs: '100%'
        },
        height: {
                xs: 'auto',
                sm:'100vh'
                },
        flexDirection: { 
                        sm: "column", 
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
            sm:'auto'
          },
          backgroundColor: 'none',
          padding: 0,
          margin: {
                    xs:'60px 0 100px',
                    sm: 0
                  },
          textAlign: 'center'
        }}
      >
        <img
          src={require('../logo.png')}
          alt={'logo'}
          style={{
            height: 'auto',
            maxWidth: '100%',
            width:'500px'
          }}
          className='learn-more-image'
        />
      </Box>
      
      {/* Text container */}
      <Box
        display='flex'
        alignItems='center'
        justifyItems='center'
        sx={{
          backgroundColor: 'none',
          margin: '0 0 50px',
          marginX: {
                    xs: 0,
                    sm:'-100px'
                    }
        }}
      >
        {/* Text Box */}
        <Box
        sx={{
            width: {
                    xs:'300px', 
                    sm: '500px', 
                    md:'auto'
                   }
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
            Here is all you need to know <br /> about us
          </Typography>
          <Typography
            sx={{
              color: '#000',
              backgroundColor: '#00B2FF',
            }}
            variant='body1'
            padding={2}
            flexDirection='column'
          >
            Whether article spirits new her covered hastily sitting her. Money witty <br />
            books nor son add. Chicken age had evening believe but proceed pretend mrs. <br />
            At missed advice my it no sister. Miss told ham dull knew see she spot near can. <br />
            Spirit her entire her called.No opinions answered oh felicity is resolved <br />
            hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken.<br />
            <Link
              to='/'
            >
              <Button
                variant="contained"
                sx={{
                  color: 'black',
                  backgroundColor: 'red',
                  mt: '20px'
                }}
              >
                BACK TO HOMEPAGE
              </Button>
            </Link>
          </Typography>

        </Box>

      </Box>

    </Stack>

  )
}

export default LearnMore