import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stack, Typography, Button,
  FormControl, InputLabel, OutlinedInput
} from '@mui/material';

export default function ForgotPassword() {
  return (
    <main class="container">
      <Stack
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          backgroundColor: "#a1edd3",
          border: 1,
          borderColor: 'black',
          borderRadius: 2

        }}
      >
        <Typography variant="h2" sx={{ marginBottom: '10px', p: 2 }} gutterBottom>Forgot Password?</Typography>
        <Typography variant="h5" gutterBottom>Enter your email to reset your password. </Typography>

        <form>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2
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

    </main>
  )
}
