import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from "./navbar/navbar"
import Sidebar from "./sidebar/sidebar"
import Homepage from "./pages/homepage/homepage"
import Login from "./pages/login/login"
import Registration from "./pages/registration/registration"
import Dashboard from "./pages/dashboard/dashboard"
import Quiz from "./pages/quiz/quiz"
import QuizGen from "./pages/quiz-gen/quiz-gen"
import QuizAction from "./pages/quiz-action/quiz-action"
import AccountPage from "./pages/account/account"

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/quiz' element={<Quiz/>} />
          <Route path='/quiz-gen' element={<QuizGen/>} />
          <Route path='/quiz-action' element={<QuizAction/>} />
          <Route path='/account' element={<AccountPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
