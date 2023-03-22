import React from 'react';
import './classboard.css';
import Navbar from '../../../navbar/navbar'
import Sidebar from '../../../sidebar/sidebar'
import Quiz from './components/Quiz';
import Student from './components/Student';
import { Quizdata, Studentdata} from './mock-data';
import Stack from '@mui/material/Stack'

export default function Dashboard(){
    const pageName = "Class Name"
    const quizzes = Quizdata.map(item => {
        return (
            < Quiz
                key={item.id}
                item={item}
            />
        )
    })

    const students = Studentdata.map(item => {
        return (
            < Student
                key={item.id}
                item={item}
            />
        )
    }) 

    return (
        <div>
            <Navbar pageName={pageName}/>
            <Sidebar />
            <Stack spacing={3} sx={{ml: '25vw', mr: '5vw', pt: '2vw'}}>
                <div className="quiz-title">
                    <h3>Available Quizzes</h3>
                </div> 
                <section className="quiz-container">
                    {quizzes}
                </section>
                <h2 className="student-title">Students</h2>
                <section className="student-container">
                    {students}
                </section>
            </Stack>
        </div>
    )
}