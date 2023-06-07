import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import AxiosContext from '../../../components/axios-context'

function passwordCheck(password){
  console.log("Password Checked")
  //Password Validity check jargon
  return null
}

const PasswordSettings = () => {
  const [inputData, setInputData] = React.useState({
    username: "",
    password: "",
    isPasswordValid: null
  })
  const {hostname, axiosConfig} = React.useContext(AxiosContext)

  function changeInputData(event){
    const input = event.target

    let passwordValidity = null
    if(input.name ==="newPassword"){
      passwordValidity = passwordCheck(input.value)
    }

    setInputData(prevData=>{
      return {
        ...prevData,
        [input.name] : input.value,
        isPasswordValid : passwordValidity===null ? prevData.isPasswordValid : passwordValidity
      }
    })
  }

  function submitChange(){
    axios.post(`${hostname}/`, axiosConfig)
    .then(res=>{
      //check if password was correct
    })
  }

  let passwordValidityStatement = ""
  if(inputData.isPasswordValid !== null){
    passwordValidityStatement = inputData.isPasswordValid ? 
    "Password is valid"
    :
    "Password is not valid"
  }

  return (
    <div>
      <h3>Change Password</h3>
      <Stack spacing={2}>
      <label>Old Password:</label>
        <input type="password" name="oldPassword" value={changeInputData}/>
        <p>{/*Wrong password prompt*/}</p>
        <label>New Password:</label>
        <input type="password" name="newPassword" value={changeInputData}/>
        <p>At least one uppercase and one number</p>
        <p>{passwordValidityStatement}</p>
        <Button variant="contained">Change Password</Button>
      </Stack>
    </div>
  )
}

export default PasswordSettings