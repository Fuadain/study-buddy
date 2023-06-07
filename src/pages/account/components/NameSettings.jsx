import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
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
  const {hostname, axiosConfig} = React.useContext(AxiosContext)
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
    axios.post(`${hostname}/`, axiosConfig)
    .then(res=>{
      //check if password was correct
    })
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
        <label>First name:</label>
        <input type="text" name="firstName" value={changeInputData}/>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={changeInputData}/>
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