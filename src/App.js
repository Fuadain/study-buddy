import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';

import ProtectedRoute from "./components/protected-route";
import UnprotectedRoute from "./components/unprotected-route";
import HostnameContext from "./components/hostname-context";

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

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['authToken'])
  const authToken = cookies.authToken
  const hostname = "https://study-buddy-api.herokuapp.com"
  
  let axiosConfig = null
  if(authToken)
    axiosConfig = { headers: {Authorization: `Bearer ${authToken}`} }
    
  function saveToken(token){
    setCookie('authToken', token, { path: '/' })
  }

  //need to also tell server to close session
  function logout(){
    removeCookie('authToken')
  }
  
  return (
    <div>
      <HostnameContext.Provider value={hostname}>
      <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<UnprotectedRoute authToken={authToken}>
              <Login saveToken={(token)=>saveToken(token)}/>
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
      </>
      </HostnameContext.Provider>
    </div>
  );
}

export default App;
