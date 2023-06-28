import React from 'react'
import Quiz from './Quiz'
import {Quizdata} from '../../mock-data'
import {Button, Box, Stack} from '@mui/material'
import {NavLink} from 'react-router-dom'
import AxiosContext from '../../../../../components/axios-context'

export default function QuizList(props){
    const {userType} = React.useContext(AxiosContext)

    const quizzes = props.quizzes.map((quiz, index) => {
        return (
            < Quiz
                key={quiz.quizName}
                index={index}
                name={quiz.quizName}
                dueDate={quiz.dueDate}
                timeLimit={quiz.timeLimit}
                classIndex={props.classIndex}
            />
        )
    })

    return(<Box>
        <h3 className="class-title">Available Quizzes</h3>
        <Stack direction="column" spacing={1}>
            {quizzes?quizzes:<h3>No quizzes available</h3>}
            {userType == "teacher"?<NavLink to="/quiz-creator">
                <Button variant='contained'>Create New Quiz</Button>
            </NavLink>:""}
        </Stack>
    </Box>)
}