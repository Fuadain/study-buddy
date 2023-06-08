
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./registration.css";
import AxiosContext from "../../components/axios-context";
import axios from 'axios'
import {Stack} from '@mui/material'

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    type: "",
  })
  const {hostname} = useContext(AxiosContext)

  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function submitData(){
  if(inputs.email && inputs.firstName && inputs.lastName && inputs.password 
  && inputs.confirmPassword && inputs.type && emailCheck(inputs.email) &&
  passwordCheck(inputs.password) && inputs.password === inputs.confirmPassword){
    axios.post(`${hostname}/newUser`, {
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      email: inputs.email,
      password: inputs.password,
      type: inputs.type
    })
    .then(res=>{
      //check if email already in use
      //alert("Email already in use")
    })
  } else {
    alert("Complete form before submitting")
  }
}
  let message = ""
  if(inputs.password && !passwordCheck(inputs.password))
    message = "Password have at least 8 characters and 1 number"
  else if(inputs.confirmPassword && inputs.password !== inputs.confirmPassword)
    message = "Password does not match"
  else if (inputs.email && !emailCheck(inputs.email))
    message = "Email is invalid"

  return (
    <>
      <div className="register">
        <h1 className="registration-header">Create a New Account</h1>
        <form className="registration-form" action="">
          

          <input
            className="registration-input"
            required
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <Stack direction={"row"} spacing={1} justifyContent="space-between">
            <input
              className="registration-input"
              required
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
            />
            <input
              className="registration-input"
              required
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
            />
          </Stack>
          <Stack direction={"row"} spacing={1} justifyContent="space-between">
            <input
              className="registration-input"
              required
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              className="registration-input"
              required
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
            />
          </Stack>
          <p className="registration-msg">{message}</p>
          <div className="radio">
            <p className="registration-radio-p">
              Are you a teacher or student?
            </p>
            <div className="registration-radio-input">
              <input
                required
                className="registration-radio"
                type="radio"
                id="teacher"
                name="type"
                value="teacher"
                onChange={handleChange}
              />
               {" "}
              <label for="teacher" className="registration-label">
                Teacher
              </label>
              <input
                required
                type="radio"
                id="student"
                name="type"
                value="student"
                className="registration-radio"
                onChange={handleChange}
              />
               {" "}
              <label for="student" className="registration-label">
                Student
              </label>
            </div>
          </div>
          <span className="registration-span">
            By submitting the form, you agree to the{" "}
            <Link className="registration-link" to="/terms">
              Terms of Service
            </Link>
          </span>
          <button type="submit" className="sign-up-btn" onClick={submitData}>
            Create account
          </button>
          <button className="google-btn">
            <i class="fa-brands fa-google"></i>
            <span className="registration-google-span">
              Continue with Google
            </span>
          </button>
          <span className="registration-span">
            Already have an account?{" "}
            <Link className="registration-link" to="/login">
              Log in
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};
export default Register;

//check if password is valid (at least 8 characters and has at least one number)
function passwordCheck(password){
  if(password.length >= 8 && /[0-9]/.test(password))
    return true
  else
    return false
}

//check if email is valid
function emailCheck(email){
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(emailRegex.test(email))
    return true
  else
    return false
}