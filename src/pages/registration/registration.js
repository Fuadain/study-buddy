import { useState } from "react";
import { Link } from "react-router-dom";
import "./registration.css";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    teacher_student: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);
  return (
    <>
      <div className="register">
        <h1>Create a New Account</h1>
        <form action="">
          <button className="google-btn">
            <i class="fa-brands fa-google"></i>Continue with Google
          </button>
          <p>or</p>

          <input
            className="input"
            required
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            className="input"
            required
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <input
            className="input"
            required
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <input
            className="input"
            required
            type="password"
            placeholder="confirm password"
            name="confirm_password"
            onChange={handleChange}
          />
          <div className="radio">
            <p>Are you a teacher or student?</p> 
            <input
              required
              type="radio"
              id="teacher"
              name="teacher_student"
              value="teacher"
              onChange={handleChange}
            />
              <label for="teacher">Teacher</label>
            <input
              required
              type="radio"
              id="student"
              name="teacher_student"
              value="student"
              onChange={handleChange}
            />
              <label for="student">Student</label>
          </div>
          <span className="terms">
            By submitting the form, you agree to the{" "}
            <Link to="/terms">Terms of Service</Link>
          </span>
          <button type="submit" className="sign-up-btn">
            Create account
          </button>
          <span>
            Already have an account? <Link to="/login">Log in</Link>
          </span>
        </form>
      </div>
    </>
  );
};
export default Register;
