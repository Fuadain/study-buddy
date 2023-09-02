import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stack, Typography, Button,
  FormControl, InputLabel, OutlinedInput
} from '@mui/material';

export default function ForgotPassword() {
  //Should there be a back button to go back to login?
  return (
      <Stack
        sx={{
          width: '100%',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 15,
          pb: 29,
          backgroundColor: "#a1edd3"

        }}
      >
        <Typography variant="h2" sx={{ marginBottom: '10px', p: 2 }} gutterBottom>Forgot Password?</Typography>
        <Typography variant="h5" gutterBottom>Enter your email to reset your password. </Typography>

        <form>
          <Stack
            sx={{
              border: 2,
              borderRadius: 2,
              borderColor: 'rgba(0,0,0,0.4)',
              mt: 6,
              alignItems: 'center',
              justifyContent: 'center',
              p: 3
            }}
          >
            <FormControl sx={{ m: 1, width: '40vw', marginBottom: '20px' }}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                fullWidth
                id="email"
                label="email"
              />
            </FormControl>
            <Link to='/forgot-password-verify'>
              <Button sx={{ width: '25ch' }} type="submit" variant="outlined" size="medium">Continue</Button>
            </Link>
          </Stack>
        </form>
      </Stack>
  )
}
