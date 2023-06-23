import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';

import ProtectedRoute from "./components/protected-route";
import UnprotectedRoute from "./components/unprotected-route";

import AxiosContext from "./components/axios-context";
import LogoutContext from "./components/logout-context";

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
  const [cookies, setCookie, removeCookie] = useCookies(['studyLogin'])
  const authToken = cookies.studyLogin?.authToken
  const userType = cookies.studyLogin?.userType
  
  let axiosConfig = null
  if(authToken)
    axiosConfig = { headers: {Authorization: `Bearer ${authToken}`} }
  
  function saveLogin(token, userType){
    setCookie('studyLogin', {authToken: token, userType: userType}, { path: '/' })
  }

  //need to also tell server to close session
  function logout(){
    //removeCookie('authToken')
    console.log("logout")
  }
  
  return (
    <div>
      <LogoutContext.Provider value={logout}>
      <AxiosContext.Provider value={{hostname: hostname, axiosConfig: axiosConfig, userType: userType}}>
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
              <Dashboard />
            </ProtectedRoute>} />
          <Route path="/classboard" element={<ProtectedRoute authToken={authToken}>
              <ClassBoard />
            </ProtectedRoute>} />
          <Route path="/quiz" element={<ProtectedRoute authToken={authToken}>
              <Quiz />
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
