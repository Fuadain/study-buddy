import React from 'react';
import './classboard.css';
import Header from './components/Header';
import Class from './components/Class';
import Quiz from './components/Quiz';
import Student from './components/Student';
import { Quizdata, Studentdata} from './mock-data';

export default function Dashboard(){
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
        <div className="class-container">
            <Header />
            <Class />
            <section className="quiz-container">
                {quizzes}
            </section>
            <h2 className="student-title">Students</h2>
            <section className="student-container">
                {students}
            </section>
        </div>
    )
}