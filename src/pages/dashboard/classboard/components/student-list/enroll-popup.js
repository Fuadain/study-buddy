import React from 'react'
import {Button, Box, Container, IconButton, Stack, TextField, Typography} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import AxiosContext from '../../../../../components/axios-context'
import axios from 'axios'

const popupStyle = { backgroundColor: "white", boxShadow: "1px 2px 4px -1px", 
position: "absolute", left: "0", right: "0", top: "0", bottom: "0", margin: "auto",
width: "350px", height: "270px", zIndex: "1"
}
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function EnrollPopup(props){
    const [emails, setEmails] = React.useState("")
    const {hostname, axiosConfig, email, forceUpdate} = React.useContext(AxiosContext)

    function changeEmails(event){
        const input = event.target
        setEmails(input.value)
    }

    function enrollStudents(){
        if(emails){
            const emailList = makeEmailArray(emails)
            if(emailListCheck(emailList))
                axios.post(`${hostname}/enroll`, {
                    teacherEmail: email,
                    emails: emailList,
                    className: props.className
                }, axiosConfig)
                .then(res=>{
                    console.log(res.data)
                    if(res.data)
                        forceUpdate()
                })
            else
                alert("One or more emails are invalid")
        } else
            alert("Enter emails first")
    }

    let message
    if(!emails)
        message = ""
    else if(emailListCheck(makeEmailArray(emails)))
        message = ""
    else
        message = "One or more emails are invalid"

    return(<Container  sx={popupStyle}>
            <IconButton onClick={props.closePopup} sx={{position:"absolute", right: "5px", top: "5px"}}>
                <CloseIcon/>
            </IconButton>
            <Stack direction="column" spacing={1} mt="50px" >
                <TextField 
                    name="emails" 
                    label={"Enter email(s)"}
                    onChange={changeEmails} 
                    value = {emails} 
                    placeholder="student1@example.com, student2@example.com"
                    multiline
                    minRows={4}
                />
                <Button variant="contained" onClick={enrollStudents}>Enroll Students</Button>
                <Typography sx={{color:'red'}}>{message}</Typography>
            </Stack>
    </Container>)
}

//check if email is valid before seeing if the user exists
function emailListCheck(emailList){
    let valid = true
    emailList.forEach(email=>{
        if(!emailRegex.test(email))
            valid = false
    })
    return valid
}

function makeEmailArray(listString){
    let emailList = listString.split(',')
    return emailList.map(email =>{
        return email.replace( /\s/g, '')
    })
}