import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const EmailSettings = () => {
  const [inputData, setInputData] = React.useState(
    {
      email:"",
      password:"",
      isEmailValid: null
    }
  )

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
    
  function emailCheck(email){
    console.log("Email Checked")
    //Email Validity check jargon
    return null
  }

  let emailValidityStatement = ""
  if(inputData.isEmailValid !== null){
    emailValidityStatement = inputData.isEmailValid ? 
    "Email is valid"
    :
    "Email is not valid"
  }
  
  return (
    <div>
      <h3>Change Email</h3>
      <Stack spacing={2}>
        <label>New Email:</label>
        <input type="email" name="email" onChange={changeInputData} value={inputData.email}/>
        <p>{emailValidityStatement}</p>
        <label>Password:</label>
        <input type="password" name="password" onChange={changeInputData} value={inputData.password}/>
        <p>{/*put wrong password prompt here*/}</p>
        <Button variant="contained">Change Email</Button>
      </Stack>
    </div>
  )
}

export default EmailSettings