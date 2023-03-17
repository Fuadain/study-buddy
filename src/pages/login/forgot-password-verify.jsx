import React from 'react';
import {
  Stack, Typography
} from '@mui/material';
import PinField from 'react-pin-field';
import './forgot-password-verify.css';

export default function ForgotPasswordVerify() {
  return (
    <main class="container">
      <Stack>
        <Typography variant="h3" gutterBottom>Enter the PIN sent to your email.</Typography>
        <Stack direction="row">
          <PinField class="pin" length={4}></PinField>

        </Stack>
      </Stack>
    </main>
  )
}

