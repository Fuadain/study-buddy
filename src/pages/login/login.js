import React from 'react';
import { Link } from 'react-router-dom';
import{Stack, Typography, Button, 
    FormControl, InputAdornment, OutlinedInput, 
    InputLabel, IconButton, FormLabel, RadioGroup, FormHelperText,
FormControlLabel, Radio, Divider } from '@mui/material';
import{Visibility, VisibilityOff} from '@mui/icons-material';
import axios from 'axios';

export default function Login(props){

    const [inputData, setInputData] = React.useState({
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
          event.preventDefault();
    };


    const changeInputData = (event) => {
        const input = event.target
        setInputData(prevInput=>{
            return {
                ...prevInput,
                [input.name]: input.value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://study-buddy-api.herokuapp.com/login", 
        {
            email: inputData.email,
            password: inputData.password
        })
        .then(res=>{
            props.saveLogin(res.data.token, res.data.userType)
        })
    };

    return (
        <Stack
            sx={{
            width: '100%',
            height: '90vh',
            alignItems:{
                        sm:'center'
                        }, 
            justifyContent: {
                            sm:'center'
                            },
            backgroundColor: '#00b3ff83'
        }}
        >
            <Typography variant='h3' gutterBottom
                sx={{ textAlign: 'center', padding:'20px 0'}}>
                Login
            </Typography>
            <form className='login-form' onSubmit={handleSubmit} 
            style={{ display:'flex', justifyContent:'center'}}>
            {/*Login Container*/}
            <Stack
                sx={{
                    width:{ xs: '60%',
                            sm:'60ch'
                            },
                    height:{ 
                            xs:'400px',
                            sm:'300px'
                            },
                    backgroundColor: 'white',
                    border: 1,
                    borderColor: 'black',
                    borderRadius: 2,
                    padding: 5,
                    justifyContent:{xs:'space-around'},
                    alignItems: {sm:'center'}
                }}
            >
                
                {/* Username Input Box */}
                    <FormControl sx={{
                                    width: { 
                                             xs:'100%',
                                             sm:'50ch'
                                            }, 
                                    margin:'0 0 1rem 2%',
                                    backgroundColor:'rgb(211,211,211)'}}
                                    >
                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="Email"
                        name="email"
                        value={inputData.email}
                        onChange={changeInputData}
                    />
                    </FormControl>

                    {/* Password Input Box */}
                    <FormControl sx={{
                                    width: { 
                                             xs:'100%',
                                             sm:'50ch'
                                            }, 
                                    margin:'0 0 1rem 2%',
                                    backgroundColor:'rgb(211,211,211)'
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
                        name="password"
                        value={inputData.password}
                        onChange={changeInputData}
                    />
                    </FormControl>
                    <Link to="/forgot-password">
                        <Typography variant="overline" display="block" align="center" gutterBottom
                            sx={{
                                border:'0px solid red',
                                color:'rgb(50,50,50)'}}>
                            Forgot Password? 
                        </Typography>
                    </Link>
    
                    <Button sx={{
                        width: '25ch', 
                        alignSelf: 'center', 
                        backgroundColor:'#1976d2', 
                        color: 'white'
                        }} 
                    type="submit" variant="contained" size="medium">
                        Login
                    </Button>
             
            <Divider sx={{marginTop: 2, marginBottom: 2}} variant="middle" />
            <Button sx={{
                        color: 'white', 
                        backgroundColor: '#ef4443', 
                        width: '25ch', alignSelf: 'center'
                        }} 
            type="submit" variant="outlined" size="medium">
                Login with Google
            </Button>
            </Stack></form>
        </Stack>
    )
}
