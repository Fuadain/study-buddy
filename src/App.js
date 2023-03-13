import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Homepage from "./pages/homepage/homepage"
import Login from "./pages/login/login"
import ForgotPassword from "./pages/login/forgot-password"

import Registration from "./pages/registration/registration"
import Dashboard from "./pages/dashboard/dashboard"
import Quiz from "./pages/quiz/quiz"
import QuizGen from "./pages/quiz-gen/quiz-gen"
import QuizAction from "./pages/quiz-action/quiz-action"
import AccountPage from "./pages/account/account"
import Contact from "./pages/homepage/components/contact"
import LearnMore from "./pages/homepage/components/learnMore"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/quiz' element={<Quiz/>} />
          <Route path='/quiz-gen' element={<QuizGen/>} />
          <Route path='/quiz-action' element={<QuizAction/>} />
          <Route path='/account' element={<AccountPage/>} />

          <Route path='/contact' element={<Contact/>} />
          <Route path='/learnMore' element={<LearnMore/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
