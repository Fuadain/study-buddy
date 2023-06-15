import React from 'react';
import {Button, Box, Container, Stack} from '@mui/material'
import {Navigate} from 'react-router-dom'

export default function Quiz(props){
    function startQuiz(){
        //Navigate to /quiz with an identifier
    }

    return(<Box sx={{width:"100%", border: "1px solid black", padding: "0px 10px 10px 10px"}}>
        <Stack direction="row" justifyContent="space-between">
            <Stack spacing={2} direction="column">
                <h2>{props.item.number}</h2>
                <h4>Time Limit: {props.item.time} </h4>
            </Stack>
            <Stack spacing={2} direction="column">
                <h4>Due by: {props.item.date}</h4>
                <Button variant="contained" onClick={startQuiz}>Start</Button>
            </Stack>
        </Stack>
    </Box>)

    return (
        <div className="quiz-card">
            <div className="quiz-section-one">
                <h2>{props.item.number}</h2>
                <h4>Questions {props.item.questions}</h4>
            </div>
            <div className="quiz-section-two">
                <h4>Due by: {props.item.date}</h4>
                <button className="quiz-button">Start</button>
                <h4>Time Limit: {props.item.time}</h4>
            </div>
        </div>
    )
}