import React from 'react';
import {Button, Box, Container, Stack} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import AxiosContext from '../../../../../components/axios-context';

export default function Quiz(props){
    const navigate = useNavigate()
    const {userType} = React.useContext(AxiosContext)

    const dueDate = formatQuizDate(props.dueDate)
    
    function goToQuiz(){
        //Navigate to /quiz-creator as teacher or /quiz as student
        if(userType == "teacher")
            navigate("/quiz-creator", {state:{className: props.className}})
        else
            navigate("/quiz", {state:{classIndex:props.classIndex, quizIndex:props.index}})
    }
    function goToAssign(){
        //Navigate to /quiz-assign as teacher
        navigate("/quiz-assign", {state:{className: props.className, quizID: props.quizID}})
    }

    return(<Box sx={{width:"100%", border: "1px solid black", padding: "0px 10px 10px 10px"}}>
        <Stack direction="row" justifyContent="space-between">
            <Stack spacing={2} direction="column">
                <h2>{props.name}</h2>
                <h4>Time Limit: {props.timeLimit} </h4>
            </Stack>
            <Stack spacing={2} direction="column">
                <h4>Due by: {dueDate}</h4>
                <Stack spacing={1} direction="row">
                    <Button variant="contained" onClick={goToQuiz}>{userType=="teacher"?"Edit":"Start"}</Button>
                    {userType=="teacher"?<Button variant="contained" onClick={goToAssign}>Assign</Button>:""}
                </Stack>
            </Stack>
        </Stack>
    </Box>)
}

function formatQuizDate(dueDate){
    let newDate = null
    if(dueDate){
        newDate = new Date(dueDate)
        console.log(typeof newDate)
        let hours = newDate.getHours()
        let ampm = hours>= 12 ? 'pm' : 'am'
        hours = hours % 12
        newDate = `${newDate.getMonth()}/${newDate.getDay()} at ${hours}:${newDate.getMinutes()}${ampm}`
    }

    return newDate
}