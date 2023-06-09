import React from 'react'
import { NavLink } from 'react-router-dom';

// need to change link when dashboard changes name
export default function ClassElement(props){



    return(
        <NavLink to='/classboard' >
            <div className="class-element">
                <h2 className="class-element-name">{props.className}</h2>
                <h3 className="class-element-quizzes">Available Quizzes: {props.quizzes}</h3>
                <p className="class-element-teacher">{props.teacherName}</p>
            </div>
        </NavLink>
    )
}