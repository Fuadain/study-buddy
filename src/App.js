import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

import ProtectedRoute from "./components/protected-route";
import UnprotectedRoute from "./components/unprotected-route";

import AxiosContext from "./components/axios-context";
import LoggingContext from "./components/logging-context";
import testData from "./components/test.json"
import axios from 'axios'

import {
  Homepage,
  Login,
  ForgotPassword,
  Registration,
  Dashboard,
  ClassBoard,
  Quiz,
  QuizAssign,
  QuizCreator,
  AccountPage,
  Contact,
  LearnMore,
  Terms,
} from "./";

const hostname = "https://study-buddy-api.herokuapp.com"


function App() {
  const [userData, setUserData] = React.useState(testData)
  const [cookies, setCookie, removeCookie] = useCookies(['studyLogin'])
  const authToken = cookies.studyLogin?.authToken
  const userType = cookies.studyLogin?.userType
  const email = cookies.studyLogin?.email

  const navigate = useNavigate()

  let axiosConfig = null
  if(authToken)
    axiosConfig = { headers: {Authorization: `Bearer ${authToken}`} }
  
  React.useEffect(()=>{
    if(authToken){
      console.log(`Getting User Data ${authToken}`)
      axios.get(`${hostname}/getUserData`, {...axiosConfig, params:{email:email}})
      .then(res=>{
        setUserData(res.data)
        console.log(res.data)
        navigate("/dashboard")
      }
      )
    }

    return () => {
      setUserData(null)
    }
  },[authToken])

  function saveLogin(token, type, userEmail){
    setCookie('studyLogin', {authToken: token, userType: type, email: userEmail}, { path: '/' })
  }

  //need to also tell server to close session
  function logout(){
    console.log("logout")
    removeCookie('studyLogin',{path:'/'})
    navigate("/login")
  }
  
  return (
    <div>
      <LoggingContext.Provider value={{logout: logout, savelogin: saveLogin}}>
      <AxiosContext.Provider value={{hostname: hostname, axiosConfig: axiosConfig, userType: userType, email: email}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<UnprotectedRoute authToken={authToken}>
              <Login saveLogin={saveLogin}/>
            </UnprotectedRoute>} />
          <Route path="/forgot-password" element={<UnprotectedRoute authToken={authToken}>
              <ForgotPassword />
            </UnprotectedRoute>} />
          <Route path="/registration" element={<UnprotectedRoute authToken={authToken}>
              <Registration />
            </UnprotectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute authToken={authToken}>
              <Dashboard classes={userData?.classes}/>
            </ProtectedRoute>} />
          <Route path="/classboard" element={<ProtectedRoute authToken={authToken}>
              <ClassBoard classes={userData?.classes}/>
            </ProtectedRoute>} />
          <Route path="/quiz" element={<ProtectedRoute authToken={authToken}>
              <Quiz classes={userData?.classes}/>
            </ProtectedRoute>} />
            <Route path="/quiz-assign" element={<ProtectedRoute authToken={authToken}>
              <QuizAssign />
            </ProtectedRoute>} />
          <Route path="/quiz-creator" element={<ProtectedRoute authToken={authToken}>
              <QuizCreator />
            </ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute authToken={authToken}>
              <AccountPage saveLogin={saveLogin}/>
            </ProtectedRoute>} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/learnMore" element={<LearnMore />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Router>
      </AxiosContext.Provider>
      </LoggingContext.Provider>
    </div>
  );
}

export default App;
