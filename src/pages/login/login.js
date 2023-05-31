import React from 'react';
import { Link } from 'react-router-dom';
import{Stack, Typography, Button, 
    FormControl, InputAdornment, OutlinedInput, 
    InputLabel, IconButton, FormLabel, RadioGroup, FormHelperText,
FormControlLabel, Radio, Divider } from '@mui/material';
import{Visibility, VisibilityOff} from '@mui/icons-material';

export default function Login(){

    
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
          event.preventDefault();
    };

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');

     /* 
  placeholder post request to server

  axios.post('/login', {
    username: username,
    password: password,
    profileType: teacher_student
  })
  */

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText('');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === 'Teacher') {
            setError(false);
        } 
        else if (value === 'Student') {
            setError(false);
        } 
        else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };

    return (
        <Stack
            sx={{
            padding: "7% 0 12.7% 0",
            width: '100%',
            height: '100%',
            alignItems:'center', 
            justifyContent: 'center',
            backgroundColor: '#00b3ff83'
        }}
        >
            <Typography variant='h3' gutterBottom>
                Login
            </Typography>
            <form className='login-form' onSubmit={handleSubmit}>
            <Stack
                sx={{
                    width: '60ch',
                    height: '100%',
                    backgroundColor: '#00B2FF',
                    border: 1,
                    borderColor: 'black',
                    borderRadius: 2,
                    padding: 5,
                    alignItems: 'center'
                }}
            >
                
                {/* Username Input Box */}
                    <FormControl sx={{width: '50ch', 
                                    margin:'0 0 1rem 2%'}}
                                    >
                    <InputLabel htmlFor="component-outlined">Username or email</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="Username or email"
                    />
                    </FormControl>

                    {/* Password Input Box */}
                    <FormControl sx={{width: '50ch', 
                                    margin:'0 0 1rem 2%'
                                    }}
                                    variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                    <Link to="/forgot-password">
                        <Typography variant="overline" display="block" align="center" color="rgba(50,50,50,1)" gutterBottom>
                            Forgot Password? 
                        </Typography>
                    </Link>

                    {/* Teacher or Student Buttons */}
                    <FormControl sx={{}} error={error} variant="standard">
                        <FormLabel id="demo-row-radio-buttons-group-label">Are you a teacher or student?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="Teacher" control={<Radio />} label="Teacher" />
                            <FormControlLabel value="Student" control={<Radio />} label="Student" />
                        </RadioGroup>
                        {helperText ? <FormHelperText>{helperText}</FormHelperText> : ""}
                    </FormControl>
    
                    <Button sx={{width: '25ch', alignSelf: 'center', backgroundColor:'#00b3ff8', color: 'black'}} type="submit" variant="contained" size="medium">Login</Button>
             
            <Divider sx={{marginTop: 2, marginBottom: 2}} variant="middle" />
            <Button sx={{color: 'white', backgroundColor: '#ef4443', width: '25ch', alignSelf: 'center'}} type="submit" variant="outlined" size="medium">Login with Google</Button>
            </Stack></form>
        </Stack>
    )
}
