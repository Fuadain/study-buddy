import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export default function Login() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // replace with your form submission logic
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className='container' style={{backgroundColor: 'white'}}>
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2, 
        }}
        component='form'
        onSubmit={handleSubmit}
      >
        <TextField
          name='fullName'
          label='Full Name'
          value={formData.fullName}
          onChange={handleChange}
          sx={{ m: 1, width: '50ch' }}
          variant='outlined'
          fullWidth
        />

        <TextField
          name='email'
          label='Email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          sx={{ m: 1, width: '50ch' }}
          variant='outlined'
          fullWidth
        />

        <TextField
          name='phoneNumber'
          label='Phone Number'
          value={formData.phoneNumber}
          onChange={handleChange}
          sx={{ m: 1, width: '50ch' }}
          variant='outlined'
          fullWidth
        />

        <TextField
          name='message'
          label='Message'
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          sx={{ m: 1, width: '50ch' }}
          variant='outlined'
          fullWidth
        />

        <Button
          sx={{
            width: '20ch',
            alignSelf: 'center',
            mt: '20px',
            backgroundColor: '#00B2FF',
            color: 'black',
          }}
          type='submit'
          variant='contained'
          size='medium'
        >
          Send Message
        </Button>
      </Box>
    </div>
  );
}