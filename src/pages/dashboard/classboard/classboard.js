import React from 'react';
import './classboard.css';
import Navbar from '../../../navbar/navbar'
import Sidebar from '../../../sidebar/sidebar'
import QuizList from './quiz-list/quiz-list';
import StudentList from './student-list/student-list';
import {Button, Box, Stack} from '@mui/material'
import axios from 'axios'
import AxiosContext from '../../../components/axios-context';

export default function Dashboard(){
    const pageName = "Class Name"
    
    const [classPage, setClassPage] = React.useState("quiz")
    const [isTeacher, setIsTeacher] = React.useState(false)

    React.useEffect(()=>{
        setIsTeacher(true)
    },[])


    function switchPage(page){
        setClassPage(page)
    }

    let currentPage
    if(classPage == "quiz")
        currentPage = <QuizList isTeacher={isTeacher}/>
    if(classPage == "students")
        currentPage = <StudentList isTeacher={isTeacher}/>

    return (
        <div>
            <Navbar pageName={pageName}/>
            <Sidebar />
            <Box sx={{ml: '25vw', mr: '5vw', pt: '2vw'}}>
            <Stack spacing={4} direction="row" height="100%">
                <Box sx={{width: '70vw'}}>
                    {currentPage}
                </Box>
                <Stack className="class-pages" 
                direction="column" spacing={2} justifyContent="flex-start" 
                pt="70px" pl="20px" ml="10px" 
                sx={{borderLeft:"solid black 1px", minHeight:"70vh"}}>
                    <h3 onClick={()=>switchPage("quiz")}>Quizzes</h3>
                    <h3 onClick={()=>switchPage("students")}>Students</h3>
                </Stack>
            </Stack>
            </Box>
        </div>
    )
}