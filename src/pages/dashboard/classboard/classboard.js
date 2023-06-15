import React from 'react';
import './classboard.css';
import Navbar from '../../../navbar/navbar'
import Sidebar from '../../../sidebar/sidebar'
import QuizList from './components/quiz-list/quiz-list';
import StudentList from './components/student-list/student-list';
import ClassSettings from './components/class-settings/class-settings';
import {Button, Box, Stack} from '@mui/material'
import AxiosContext from '../../../components/axios-context';

export default function Dashboard(){
    const pageName = "Class Name"
    
    const [classPage, setClassPage] = React.useState("quiz")
    const {hostname, axiosConfig} = React.useContext(AxiosContext)

    React.useEffect(()=>{
        //axios.get(`${hostname}/`) //get class name
    },[])

    function switchPage(page){
        setClassPage(page)
    }

    let currentPage
    switch(classPage){
        case "quiz":
            currentPage = <QuizList/>
            break
        case "students":
            currentPage = <StudentList/>
            break
        case "settings":
            currentPage = <ClassSettings/>
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
                direction="column" spacing={2} justifyContent="flex-start" 
                pt="70px" pl="20px" ml="10px" 
                sx={{borderLeft:"solid black 1px", minHeight:"70vh"}}>
                    <h3 onClick={()=>switchPage("quiz")}>Quizzes</h3>
                    <h3 onClick={()=>switchPage("students")}>Students</h3>
                    <h3 onClick={()=>switchPage("settings")}>Settings</h3>
                </Stack>
            </Stack>
            </Box>
        </div>
    )
}