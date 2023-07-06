import React from 'react';
import './classboard.css';
import Navbar from '../../../navbar/navbar'
import Sidebar from '../../../sidebar/sidebar'
import QuizList from './components/quiz-list/quiz-list';
import StudentList from './components/student-list/student-list';
import ClassSettings from './components/class-settings/class-settings';
import {Button, Box, Stack, Typography} from '@mui/material'
import AxiosContext from '../../../components/axios-context';
import {useLocation, useNavigate} from 'react-router-dom'

export default function Classboard(props){
    const pageName = "Class Name"
    
    const navigate = useNavigate()
    const location = useLocation()
    const {classIndex = null} = location?.state || {}
    const className = props?.classes[classIndex]?.className
    const [classPage, setClassPage] = React.useState("quiz")
    
    React.useEffect(()=>{
        if(classIndex === null)
            navigate("/dashboard")
    },[])

    function switchPage(page){
        setClassPage(page)
    }

    let currentPage = ""
    if(classIndex !== null)
        switch(classPage){
            case "quiz":
                currentPage = <QuizList quizzes={props.classes[classIndex].quizzes} classIndex={classIndex} className={props.classes[classIndex].className}/>
                break
            case "students":
                currentPage = <StudentList className={className}/>
                break
            case "settings":
                currentPage = <ClassSettings className={props.classes[classIndex].className}/>
                break
        }

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
                direction="column" spacing={2}
                pt="70px" pl="20px" ml="10px" 
                sx={{borderLeft:"solid black 1px", minHeight:"70vh"}}>
                    
                    <Typography onClick={()=>switchPage("quiz")}>Quizzes</Typography>
                    <Typography onClick={()=>switchPage("students")}>Students</Typography>
                    <Typography onClick={()=>switchPage("settings")}>Settings</Typography>
                </Stack>
            </Stack>
            </Box>
        </div>
    )
}