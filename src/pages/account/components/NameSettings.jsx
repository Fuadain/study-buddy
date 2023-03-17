import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const NameSettings = () => {
  const [inputData, setInputData] = React.useState({
    username: "",
    password: "",
    isNameValid: null
  })

  React.useEffect(()=>{
    //api username pull jargon
  },[])

  function changeInputData(event){
    const input = event.target

    let nameValidity = null
    if(input.name ==="username"){
      nameValidity = nameCheck(input.value)
    }

    setInputData(prevData=>{
      return {
        ...prevData,
        [input.name] : input.value,
        isNameValid : nameValidity===null ? prevData.isNameValid : nameValidity
      }
    })
  }

  function nameCheck(name){
    console.log("Name Checked")
    //Name Validity check jargon
    return null
  }

  let nameValidityStatement = ""
  if(inputData.isNameValid !== null){
    nameValidityStatement = inputData.isNameValid ? 
    "Username is valid"
    :
    "Username is not valid"
  }

  return (
    <div>
      <h3>Change Name</h3>
      <Stack spacing={2}>
        <label>Username:</label>
        <input type="text" name="username" value={changeInputData}/>
        <p>{nameValidityStatement}</p>
        <label>Password:</label>
        <input type="password" name="password" value={changeInputData}/>
        <p>{/*Wrong password prompt*/}</p>
        <Button variant="contained">Change Name</Button>
      </Stack>
    </div>
  )
}

export default NameSettings