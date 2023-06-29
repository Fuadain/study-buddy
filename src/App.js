import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';

import ProtectedRoute from "./components/protected-route";
import UnprotectedRoute from "./components/unprotected-route";

import AxiosContext from "./components/axios-context";
import LogoutContext from "./components/logout-context";
import testData from "./components/test.json"

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
  const userType = "student"//cookies.studyLogin?.userType
  
  let axiosConfig = null
  if(authToken)
    axiosConfig = { headers: {Authorization: `Bearer ${authToken}`} }
  
  React.useEffect(()=>{
    // if(authToken){
    //   axios.get(`${hostname}/getUserData`, axiosConfig)
    //   .then(res=>{
    //     setUserData(res.data)
    //   })
    // }

    // return () => {
    //   setUserData(null)
    // }
  },[authToken])

  function saveLogin(token, userType){
    setCookie('studyLogin', {authToken: token, userType: userType}, { path: '/' })
  }

  //need to also tell server to close session
  function logout(){
    removeCookie('authToken')
  }
  
  return (
    <div>
      <LogoutContext.Provider value={logout}>
      <AxiosContext.Provider value={{hostname: hostname, axiosConfig: axiosConfig, userType: userType, email: userData.email}}>
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
              <Dashboard classes={userData.classes}/>
            </ProtectedRoute>} />
          <Route path="/classboard" element={<ProtectedRoute authToken={authToken}>
              <ClassBoard classes={userData.classes}/>
            </ProtectedRoute>} />
          <Route path="/quiz" element={<ProtectedRoute authToken={authToken}>
              <Quiz classes={userData.classes}/>
            </ProtectedRoute>} />
            <Route path="/quiz-assign" element={<ProtectedRoute authToken={authToken}>
              <QuizAssign />
            </ProtectedRoute>} />
          <Route path="/quiz-creator" element={<ProtectedRoute authToken={authToken}>
              <QuizCreator />
            </ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute authToken={authToken}>
              <AccountPage />
            </ProtectedRoute>} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/learnMore" element={<LearnMore />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Router>
      </AxiosContext.Provider>
      </LogoutContext.Provider>
    </div>
  );
}

export default App;
