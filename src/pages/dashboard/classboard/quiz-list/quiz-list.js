import React from 'react'
import Quiz from './Quiz'
import {Quizdata} from '../mock-data'
import {Button, Stack} from '@mui/material'
import {NavLink} from 'react-router-dom'
import AxiosContext from '../../../../components/axios-context'

export default function QuizList(props){

    const {hostname, axiosConfig} = React.useContext(AxiosContext)

    React.useEffect(()=>{

    })

    const quizzes = Quizdata.map(item => {
        return (
            < Quiz
                key={item.id}
                item={item}
            />
        )
    })

    return(<>
        <h3 className="class-title">Available Quizzes</h3>
        <Stack direction="column" spacing={1}>
            {quizzes}
            {props.isTeacher?<NavLink to="/quiz-creator">
                <Button variant='contained'>Create New Quiz</Button>
            </NavLink>:""}
        </Stack>
    </>)
}