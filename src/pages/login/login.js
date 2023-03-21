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

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
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
            margin: "0 auto",
            width: '50%',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems:'center', 
            justifyContent: 'center',
            alignSelf: 'center',
            p:2,
        }}
            direction="column"
        >
            <Typography variant='h3' gutterBottom>
                Login
            </Typography>
            <Stack
                sx={{
                    width: '70ch',
                    height: '100%',
                    backgroundColor: '#a1edd3',
                    border: 1,
                    borderColor: 'black',
                    borderRadius: 2,
                    padding: 2,
                    display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <form className='login-form' onSubmit={handleSubmit}>
                {/* Username Input Box */}
                    <FormControl sx={{width: '50ch', alignSelf: 'center'}}>
                    <InputLabel htmlFor="component-outlined">Username or email</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="Username or email"
                    />
                    </FormControl>

                    {/* Password Input Box */}
                    <FormControl sx={{width: '50ch', alignSelf: 'center'}} variant="outlined">
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
                        <Typography variant="overline" display="block" align="center" gutterBottom>
                            Forgot Password? 
                        </Typography>
                    </Link>

                    {/* Teacher or Student Buttons */}
                    <FormControl sx={{alignSelf: 'center'}} error={error} variant="standard">
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
                        <FormHelperText>{helperText}</FormHelperText>
                    </FormControl>
    
                    <Button sx={{width: '25ch', alignSelf: 'center'}} type="submit" variant="outlined" size="medium">Login</Button>
             </form>
            <Divider sx={{marginTop: 2, marginBottom: 2}} variant="middle" />
            <Button sx={{color: 'white', backgroundColor: '#ef4443', width: '25ch', alignSelf: 'center'}} type="submit" variant="outlined" size="medium">Login with Google</Button>
            </Stack>
        </Stack>
    )
}
