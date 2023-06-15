import React from 'react'
import {Button, Box, Stack} from '@mui/material'
import axios from 'axios'
import AxiosContext from '../../../../../components/axios-context'
import { useNavigate } from 'react-router-dom'

export default function ClassSettings(props){
    const navigate = useNavigate()
    const {hostname, axiosConfig, userType} = React.useContext(AxiosContext)

    function deleteClass(){
        axios.post(`${hostname}/delete-class`, {className: ""}, axiosConfig)
        .then(res=>{
            //confirm
        })
    }

    function leaveClass(){
        /*axios.post(`${hostname}/delete-class`, {className: ""}, axiosConfig)
        .then(res=>{
            //confirm
        })*/
    }

    return (<Box>
        <h3 className="class-title">Settings</h3>
        <Stack>
            {userType == "teacher"?
            <Button onClick={deleteClass}>Delete Class</Button>:
            <Button onClick={leaveClass}>Leave Class</Button>
            }
        </Stack>
    </Box>)
}