import React from 'react'
import {Button, Stack, TextField} from '@mui/material/'
import axios from 'axios'
import AxiosContext from '../../../components/axios-context'

function nameCheck(name){
  console.log("Name Checked")
  //Name Validity check jargon
  return null
}

const NameSettings = () => {
  const [inputData, setInputData] = React.useState({
    firstName: "",
    lastName: "",
    password: "",
    isNameValid: null
  })
  const {hostname, axiosConfig, email} = React.useContext(AxiosContext)
  React.useEffect(()=>{
    //api name pull jargon
    /*
    axios.get(`${hostname}/`, axiosConfig)
    .then(res=>{
      setInputData(prev=>{
        return {
          ...prev,
          firstName: res.data.firstName,
          lastName: res.data.lastName
        }
      })
    })
    */
  },[])

  function changeInputData(event){
    const input = event.target

    let nameValidity = null
    if(input.name === "username"){
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

  function submitChange(){
    if(true){
      axios.post(`${hostname}/update-name`,{
        email: email,
        newFirstName:inputData.firstName,
        newLastName:inputData.lastName,
        password:inputData.password
      }, axiosConfig)
      .then(res=>{
        //check if password was correct
        console.log(res.data)
      })
    }else{
      alert("Name invalid")
    }
  }

  let nameValidityStatement = ""
  if(inputData.isNameValid !== null){
    nameValidityStatement = inputData.isNameValid ? 
    "Name is valid"
    :
    "Name is not valid"
  }

  return (
    <div>
      <h3>Change Name</h3>
      <Stack spacing={2}>
        <TextField id="standard-basic" label="First Name" variant="standard" 
        type="text" name="firstName" value={inputData.firstName} onChange={changeInputData}
        />
        <TextField id="standard-basic" label="Last Name" variant="standard" 
        type="text" name="lastName" value={inputData.lastName} onChange={changeInputData}
        />
        <p>{nameValidityStatement}</p>
        <TextField id="standard-basic" label="Password" variant="standard" 
        type="password" name="password" value={inputData.password} onChange={changeInputData}
        />
        <Button variant="contained" onClick={submitChange}>Change Name</Button>
      </Stack>
    </div>
  )
}

export default NameSettings