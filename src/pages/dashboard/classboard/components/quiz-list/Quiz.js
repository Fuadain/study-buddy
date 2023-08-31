import React from 'react';
import {Button, Box, Container, Stack} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import AxiosContext from '../../../../../components/axios-context';

export default function Quiz(props){
    const navigate = useNavigate()
    const {userType} = React.useContext(AxiosContext)

    function goToQuiz(){
        //Navigate to /quiz-creator as teacher or /quiz as student

        if(userType === "teacher")
             navigate("/quiz-creator")
        else
             navigate("/quiz")
    }


    return (
    <Box sx={{width:"100%", border: "1px solid black", padding: "0px 10px 10px 10px"}}>
        <Stack direction="row"  
                sx={{
                    height:{
                          xs: 280,
                          sm: 150,
                          md: 112  
                    },
                    padding:{
                          xs: 0,
                          sm: '0 20px'
                    },
                    justifyContent:{
                        xs: 'center',
                        sm: 'space-between'
                    },
                    alignItems:{
                        xs: 'flex-start',
                        sm: 'center',
                        md: 'none'
                    },
                    flexDirection:{
                        xs: 'column',
                        sm: 'row'
                    }
                }}>
            <Stack spacing={2}>
                <h2>{props.item.number}</h2>
                <h4>Time Limit: {props.item.time} </h4>
            </Stack>
            <Stack spacing={2} direction="column">
                <h4>Due by: {props.item.date}</h4>
                <Button variant="contained" onClick={goToQuiz} zIndex='-1' disableElevation>
                    {userType==="teacher" ? "Start" : "Edit"}
                </Button>
            </Stack>
        </Stack>
    </Box>
    )
}