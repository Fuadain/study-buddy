import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const VerificationSettings = () => {
  const [inputData, setInputData] = React.useState(
    {
      phoneNumber:"",
      password:"",
      isNumberValid: null
    }
  )

  function changeInputData(event) {
    const input = event.target

    let numberValidity = null
    if(input.name ==="phoneNumber"){
      numberValidity = numberCheck(input.value)
    }

    setInputData(prevData=>{
      return{
        ...prevData,
        [input.name] : input.value,
        isNumberValid : numberValidity===null ? prevData.isNumberValid : numberValidity
      }
    })
  }
    
  function numberCheck(email){
    console.log("Email Checked")
    //Email Validity check jargon
    return null
  }

  let numberValidityStatement = ""
  if(inputData.isNumberValid !== null){
    numberValidityStatement = inputData.isNumberValid ? 
    "Phone number is valid"
    :
    "Phone number is not valid"
  }
  
  return (
    <div>
      <h3>Change Phone Number</h3>
      <Stack spacing={2}>
        <label>New Phone Number:</label>
        <input type="phoneNumber" name="phoneNumber" onChange={changeInputData} value={inputData.phoneNumber}/>
        <p>{numberValidityStatement}</p>
        <label>Password:</label>
        <input type="password" name="password" onChange={changeInputData} value={inputData.password}/>
        <p>{/*put wrong password prompt here*/}</p>
        <Button variant="contained">Change Phone Number</Button>
      </Stack>
    </div>
  )
}

export default VerificationSettings