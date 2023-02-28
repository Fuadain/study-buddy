import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from "./navbar"
import Home from "./pages/home/home"
import Quiz from "./pages/quiz/quiz"
import QuizGen from "./pages/quiz-gen/quiz-gen"

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/quiz' element={<Quiz/>} />
          <Route path='/quiz-gen' element={<QuizGen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
