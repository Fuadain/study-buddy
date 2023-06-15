import React from 'react'
import Quiz from './Quiz'
import {Quizdata} from '../../mock-data'
import {Button, Box, Stack} from '@mui/material'
import {NavLink} from 'react-router-dom'
import AxiosContext from '../../../../../components/axios-context'

export default function QuizList(props){
    const [quizData, setQuizData] = React.useState(Quizdata)
    const {hostname, axiosConfig, userType} = React.useContext(AxiosContext)

    React.useEffect(()=>{
        /* get quizzes
        axios.get(`${hostname}/`)
        .then(res=>{
            let newData = res.data.quizList.filter(quiz=>{
                if(quiz.dueDate){
                    return true
                }
                return false
            })
            setQuizData(newData)
        })
        */
    },[])

    const quizzes = quizData.map(item => {
        return (
            < Quiz
                key={item.id}
                item={item}
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