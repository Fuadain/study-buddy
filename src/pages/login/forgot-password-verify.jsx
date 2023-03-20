import React from 'react';
import {
  Stack, Typography
} from '@mui/material';
import PinField from 'react-pin-field';
import './forgot-password-verify.css';

export default function ForgotPasswordVerify() {
  return (
    <main class="container">
      <Stack sx={{
        width: '50%',
        backgroundColor: '#a1edd3',
        p: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 1,
        borderColor: 'black',
        borderRadius: 2
      }}>
        <Typography variant="h3" sx={{ marginBottom: '50px', overflow: 'auto' }} gutterBottom>Enter the PIN sent to your email.</Typography>
        <Stack direction="row" sx={{}}>
          <PinField class="pin" length={4}></PinField>
        </Stack>
      </Stack>
    </main >
  )
}

