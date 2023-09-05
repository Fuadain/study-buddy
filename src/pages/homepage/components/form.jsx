import { useState, useContext } from 'react';
import { Box, TextField, Button } from '@mui/material';
import axios from 'axios'
import AxiosContext from '../../../components/axios-context';

export default function Login() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const {hostname} = useContext(AxiosContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${hostname}/emailService`,{...formData})
    .then(res=>{
      if(res.data.message){
        console.log(res.data.message)
      }else{
        console.log("Response Error")
      }
    })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    
      <Box
        sx={{
          height: {
                  xs:'50%',
                  sm:'100%'
                },
          width: {
                  xs:'90%', 
                  sm:'50%'
                },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        component='form'
        onSubmit={handleSubmit}
        p={2}
      >
        <TextField
          name='fullName'
          label='Full Name'
          value={formData.fullName}
          onChange={handleChange}
          sx={{
                width: {
                        xs:'100%', 
                        md:'50ch'
                      }, 
                margin:'10px 0 20px', 
                backgroundColor:'white'
              }}
          variant='outlined'
          fullWidth
        />

        <TextField
          name='email'
          label='Email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          sx={{
                width: {
                        sm:'50ch'
                      },
                margin:'0 0 20px', 
                backgroundColor:'white'
              }}
          variant='outlined'
          fullWidth
        />

        <TextField
          name='phoneNumber'
          label='Phone Number'
          value={formData.phoneNumber}
          onChange={handleChange}
          sx={{
                width: {
                        sm:'50ch'
                      },
                margin:'0 0 20px', 
                backgroundColor:'white'
              }}
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
          sx={{
                width: {
                        sm:'50ch'
                      },
                margin:'0 0 20px', 
                backgroundColor:'white'
              }}
          variant='outlined'
          fullWidth
        />

        <Button
          sx={{
            width: '20ch',
            backgroundColor: '#00B2FF',
            color: 'black',
            justifySelf: 'center'
          }}
          type='submit'
          variant='contained'
          size='medium'
        >
          Send Message
        </Button>
      </Box>
  
  );
}