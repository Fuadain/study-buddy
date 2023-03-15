import React from 'react';

export default function Student(props){
    return (
        <div className="student-card">
            <h4>Photo</h4>
            <h4>{props.item.name}</h4>
            <h4>Grade: {props.item.grade}</h4>
        </div>
    )
}