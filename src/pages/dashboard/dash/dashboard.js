import React from 'react'
import './dashboard.css'

//need to change if file moved
import Navbar from '../../../navbar/navbar'
import Sidebar from '../../../sidebar/sidebar'
import ClassElement from './class-element'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';

export default function ClassList(){

    const [classes, setClasses] = React.useState([])
    const [isTeacher, setIsTeacher] = React.useState(false)

    React.useEffect(()=>{
        //api jargon
        setClasses([{
            className: "Class 1",
            teacherName: "Teacher 1",
            quizzes: 2
        },
        {
            className: "Class 2",
            teacherName: "Teacher 2",
            quizzes: 2
        }
    ])
    },[])

    const classListElements = classes.map(classElement => <ClassElement
                                                            className={classElement.className}
                                                            teacherName={classElement.teacherName}
                                                            quizzes={classElement.quizzes}
                                                            />)

    return(
        <Box>
            <Navbar/>
            <Box flexDirection='row'>
                <Sidebar/>
                <Stack spacing={3} sx={{ml: '25vw', mr: '5vw', pt: '2vw'}}>
                    <h1>{isTeacher?"Classes you teach":"Classes you attend"}</h1>
                    {classListElements}
                </Stack>
            </Box>
        </Box>
    )
}