
import { useState } from "react";
import { Link } from "react-router-dom";
import "./registration.css";

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirm_password: "",
    type: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* 
  placeholder post request to server

  axios.post('/registration', {
    username: inputs.username,
    email: inputs.email,
    password: inputs.password,
    type: inputs.type
  })
  */

  console.log(inputs);
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
          <input
            className="registration-input"
            required
            type="text"
            placeholder="First Name"
            name="firstname"
            onChange={handleChange}
          />
          <input
            className="registration-input"
            required
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={handleChange}
          />
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
            name="confirm_password"
            onChange={handleChange}
          />
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
          <button type="submit" className="sign-up-btn">
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
