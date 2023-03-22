import React from 'react';

export default function Quiz(props){
    return (
        <div className="quiz-card">
            <div className="quiz-section-one">
                <h2>{props.item.number}</h2>
                <h4>Questions {props.item.questions}</h4>
            </div>
            <div className="quiz-section-two">
                <h4>Due by: {props.item.date}</h4>
                <button className="quiz-button">Start</button>
                <h4>Time Limit: {props.item.time}</h4>
            </div>
        </div>
    )
}