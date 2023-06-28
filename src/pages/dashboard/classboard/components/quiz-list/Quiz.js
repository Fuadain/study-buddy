import React from 'react';
import {Button, Box, Container, Stack} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import AxiosContext from '../../../../../components/axios-context';

export default function Quiz(props){
    const navigate = useNavigate()
    const {userType} = React.useContext(AxiosContext)

    function goToQuiz(){
        //Navigate to /quiz-creator as teacher or /quiz as student

        if(userType == "teacher")
            navigate("/quiz-creator")
        else
            navigate("/quiz", {state:{classIndex:props.classIndex, quizIndex:props.index}})
    }


    return(<Box sx={{width:"100%", border: "1px solid black", padding: "0px 10px 10px 10px"}}>
        <Stack direction="row" justifyContent="space-between">
            <Stack spacing={2} direction="column">
                <h2>{props.name}</h2>
                <h4>Time Limit: {props.timeLimit} </h4>
            </Stack>
            <Stack spacing={2} direction="column">
                <h4>Due by: {props.dueDate}</h4>
                <Button variant="contained" onClick={goToQuiz}>{userType=="teacher"?"Edit":"Start"}</Button>
            </Stack>
        </Stack>
    </Box>)
}