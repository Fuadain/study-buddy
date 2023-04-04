import React from 'react'
import Divider from '@mui/material/Divider';
import './question.css'

export default function Question(props){
    let answerElements = ""
    //might be a better way to deal with changing answer style
    if(props.type === 'mcq'){
        const answerStyle = {
            border: "2px solid blue",
            borderRadius: '5px',
            paddingTop: '3px',
            paddingBottom: '3px',
            paddingLeft: '6px',
            paddingRight: '6px',
            backgroundColor:'white',
        }
        const chosenAnswerStyle = {
            ...answerStyle,
            backgroundColor: "#b7eef5"
        }
        
        answerElements = props.choices.map(answer => (<p
                key={answer}
                className="question"
                style={answer===props.chosenAnswer?chosenAnswerStyle:answerStyle}
                onClick={()=>props.chooseAnswer(props.id, answer)}
            >
                {answer}
            </p>))
    }

    function textChange(event){
        const text = event.target.value
        props.chooseAnswer(props.id, text)
    }

    return (
        <div>
            <h3>{props.question}</h3>
            {/* {props.isWritten ? 
            <textarea 
                className='text-question'   
                onChange={(event)=>textChange(event)}
            >
                {props.answer}
            </textarea>
            : */}
            <div>
                {answerElements}
            </div>
            {/* } */}
            <Divider/>
        </div>
    )
}