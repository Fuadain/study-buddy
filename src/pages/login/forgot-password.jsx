import React from 'react';
import {
  Stack, Typography, Button, Box,
  FormControl, InputAdornment, OutlinedInput,
  InputLabel, IconButton, FormLabel, RadioGroup, FormHelperText,
  FormControlLabel, Radio
} from '@mui/material';

export default function ForgotPassword() {
  return (
    <div class="container">
      <Stack
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Typography variant="h2" gutterBottom>Forgot Password?</Typography>
        <Typography variant="h5" gutterBottom>Enter your email to reset your password. </Typography>

        <form>
          <Stack
          >
            <FormControl sx={{ m: 1, width: '50ch', maxWidth: '100%' }}>
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput
                fullWidth
                id="component-outlined fullWidth"
                label="email"
              />
            </FormControl>
            <Button sx={{ width: '25ch', alignSelf: 'center' }} type="submit" variant="outlined" size="medium">Continue</Button>
          </Stack>
        </form>
      </Stack>

    </div>
  )
}
