import React from 'react'
import {Button, Stack, TextField} from '@mui/material/'
import AxiosContext from '../../../components/axios-context'
import axios from 'axios'

function emailCheck(email){
  if(email === "")
     return null

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(emailRegex.test(email))
    return true
  else
    return false
}

const EmailSettings = () => {
  const [inputData, setInputData] = React.useState(
    {
      email:"",
      password:"",
      isEmailValid: null
    }
  )
  const {hostname, axiosConfig} = React.useContext(AxiosContext)

  React.useEffect(()=>{
    /*
    axios.get(`${hostname}/`, axiosConfig)
    .then(res=>{
      setInputData(prev=>{
        return {...prev, email: res.data.email}
      })
    })
    */
  },[])

  function changeInputData(event) {
    const input = event.target

    let emailValidity = null
    if(input.name ==="email"){
      emailValidity = emailCheck(input.value)
    }

    setInputData(prevData=>{
      return{
        ...prevData,
        [input.name] : input.value,
        isEmailValid : emailValidity===null ? prevData.isEmailValid : emailValidity
      }
    })
  }

  function submitChange(){
    axios.post(`${hostname}/update-email`,{
      newEmail: inputData.email,
      password: inputData.password
    }, axiosConfig)
    .then(res=>{
      //check if password was correct
      //check if email exists
    })
  }

  let emailValidityStatement = ""
  if(inputData.isEmailValid !== null){
    emailValidityStatement = inputData.isEmailValid ? 
    "Email is valid"
    :
    "Email is not valid"
  } else
    emailValidityStatement = ""
  
  return (
    <div>
      <h3>Change Email</h3>
      <Stack spacing={2}>
        <TextField id="standard-basic" label="Email" variant="standard"
        type="email" name="email" onChange={changeInputData} value={inputData.email}
        />
        <p>{emailValidityStatement}</p>
        <TextField id="standard-basic" label="Password" variant="standard"
        type="password" name="password" onChange={changeInputData} value={inputData.password}
        />
        <Button variant="contained" onClick={submitChange}>Change Email</Button>
      </Stack>
    </div>
  )
}

export default EmailSettings