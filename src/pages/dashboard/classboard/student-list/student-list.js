import React from 'react'
import Student from './Student'
import { Studentdata } from '../mock-data'
import {Box, Button} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import AxiosContext from '../../../../components/axios-context'
import EnrollPopup from './enroll-popup'

export default function StudentList(props){
    const [enrolling, setEnrolling] = React.useState(false)
    const {hostname, axiosConfig} = React.useContext(AxiosContext)

    React.useEffect(()=>{

    },[])

    function enrollView(bool){
        setEnrolling(bool)
    }


    const students = Studentdata.map(item => 
            <Student
                key={item.id}
                item={item}
            />
    ) 

    return(<Box>
        {enrolling?<EnrollPopup closePopup={()=>enrollView(false)}/>:""}
        <h3 className="class-title">Students</h3>
        <Grid container className="student-container" columns={3}  spacing={2} mb={2}>
            {students}
        </Grid>
        {props.isTeacher?<Button variant="contained" onClick={()=>enrollView(true)}>Enroll Students</Button>:""}
    </Box>)
}