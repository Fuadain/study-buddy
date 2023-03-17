import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Homepage, Login, ForgotPassword, ForgotPasswordVerify, Registration, Dashboard, 
  Quiz, QuizGen, QuizAction, AccountPage, Contact, LearnMore } from './';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/forgot-password-verify' element={<ForgotPasswordVerify/>} />
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
