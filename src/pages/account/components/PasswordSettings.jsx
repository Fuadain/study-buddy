import React from 'react'
import {Button, Stack, TextField} from '@mui/material/'
import axios from 'axios'
import AxiosContext from '../../../components/axios-context'

const PasswordSettings = () => {
  const [inputData, setInputData] = React.useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  })
  const {hostname, axiosConfig, email} = React.useContext(AxiosContext)

  function changeInputData(event){
    const input = event.target

    setInputData(prevData=>{
      return {
        ...prevData,
        [input.name] : input.value,
      }
    })
  }

  function submitChange(){
    if(inputData.oldPassword && inputData.newPassword && inputData.confirmNewPassword
    && inputData.newPassword === inputData.confirmNewPassword && passwordCheck(inputData.newPassword)){
      axios.post(`${hostname}/update-password`, {
        oldPassword: inputData.oldPassword,
        newPassword: inputData.newPassword,
        email: email
      }, axiosConfig)
      .then(res=>{
        //check if password was correct
        console.log(res.data)
      })
    } else {
      alert("Invalid input")
    }
  }

  let message = ""
  if(inputData.newPassword && !passwordCheck(inputData.newPassword))
    message = "Password must have at least 8 characters and have 1 number"
  else if(inputData.confirmNewPassword && inputData.newPassword !== inputData.confirmNewPassword)
    message = "Password does not match" 

  return (
    <div>
      <h3>Change Password</h3>
      <Stack spacing={2}>
        <TextField id="standard-basic" label="Old Password" variant="standard"
          type="password" name="oldPassword" value={inputData.oldPassword} onChange={changeInputData}
        />
        <TextField id="standard-basic" label="New Password" variant="standard" 
        type="password" name="newPassword" value={inputData.newPassword} onChange={changeInputData}
        />
        <TextField id="standard-basic" label="Confirm New Password" variant="standard" 
        type="password" name="confirmNewPassword" value={inputData.confirmNewPassword} onChange={changeInputData}
        />
        <p>{message}</p>
        <Button variant="contained" onClick={submitChange}>Change Password</Button>
      </Stack>
    </div>
  )
}

export default PasswordSettings

//check if password is valid (at least 8 characters and has at least one number)
function passwordCheck(password){
  if(password.length >= 8 && /[0-9]/.test(password))
    return true
  else
    return false
}
