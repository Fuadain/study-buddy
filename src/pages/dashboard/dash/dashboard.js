import React from 'react'
import './dashboard.css'

//need to change if file moved
import Navbar from '../../../navbar/navbar'
import Sidebar from '../../../sidebar/sidebar'
import ClassElement from './components/class-element'
import CreateClass from './components/create-class'

import {Button, Box, Stack} from '@mui/material'
import AxiosContext from '../../../components/axios-context'

export default function Dashboard(props){
    let pageName = "Dashboard";

    const [creatingClass, setCreatingClass] = React.useState(false)
    const {hostname, axiosConfig, userType} = React.useContext(AxiosContext)

    function classView(bool=true){
        setCreatingClass(bool)
    }

    const classListElements = props.classes.map((classElement, index) => <ClassElement
                                                            key={classElement.className}
                                                            className={classElement.className}
                                                            teacherName={classElement.teacherName}
                                                            quizzes={classElement.quizzes.length}
                                                            index={index}
                                                            />)

    return(
        <Box>
            <Navbar pageName={pageName}/>
            <Box flexDirection='row' className="dashboard">
                <Sidebar/>
                <Stack spacing={3} sx={{ml: '25vw', mr: '5vw', pt: '2vw'}}>
                    <h1>{userType =="teacher"?"Classes you teach":"Classes you attend"}</h1>
                    {classListElements}
                    {userType =="teacher"?<Button variant="contained" onClick={classView}>Create New Class</Button>:""}
                </Stack>
                
            </Box>
            {creatingClass?<CreateClass closePopup={()=>classView(false)}/>:""}
        </Box>
    )
}