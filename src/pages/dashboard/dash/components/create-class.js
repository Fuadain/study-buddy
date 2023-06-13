import React from 'react'
import {Button, Box, Container, IconButton, Stack} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import AxiosContext from '../../../../components/axios-context'
import axios from 'axios'

const popupStyle = { backgroundColor: "white", boxShadow: "1px 2px 4px -1px", 
position: "absolute", left: "0", right: "0", top: "0", bottom: "0", margin: "auto",
width: "300px", height: "200px",
}

export default function CreateClass(props){
    const [inputData, setInputData] = React.useState({
        className: ""
    })
    const {hostname, axiosConfig} = React.useContext(AxiosContext)

    function changeInput(event){
        const input = event.target
        setInputData(prev=>{
            return {
                [input.name]: input.value
            }
        })
    }

    function newClass(){
        if(inputData.className)
            axios.post(`${hostname}/`, inputData, axiosConfig)
            .then(res=>{
                //confirm class was made
            })
        else
            alert("A new class needs a name")
    }

    return(<Container  sx={popupStyle}>
            <IconButton onClick={props.closePopup} sx={{position:"absolute", right: "5px", top: "5px"}}>
                <CloseIcon/>
            </IconButton>
            <Stack direction="column" spacing={1} mt="50px" >
                <label>Class Name:</label>
                <input type="text" name="className" onChange={changeInput} value={inputData.className}/>
                <Button variant="contained" onClick={newClass}>Create Class</Button>
            </Stack>
    </Container>)
}