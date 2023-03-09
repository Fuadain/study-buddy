import React from 'react'

export default function Question(props){
    let answerElements = ""
    //might be a better way to deal with changing answer style
    if(!props.isWritten){
        const answerStyle = {
            backgroundColor: "white"
        }
        const chosenAnswerStyle = {
            backgroundColor: "grey"
        }
        answerElements = props.answers.map(answer => 
            (<p
                style={answer===props.chosenAnswer?chosenAnswerStyle:answerStyle}
                onClick={props.chosenAnswer(props.id, answer)}
            >
                {answer}
            </p>))
    }

    function textChange(event){
        const text = event.target.value()
        props.chosenAnswer(props.id, text)
    }

    return (
        <div>
            <h3>{props.question}</h3>
            {props.isWritten ? 
            <input type="text" onChange={(event)=>textChange(event)}>{props.answer}</input>
            :
            <div>
                {answerElements}
            </div>}
        </div>
    )
}