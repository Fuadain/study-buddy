import React from 'react'
import { Divider } from '@mui/material'

//could use stopPropagation and place an onClick for changeEditData(false)
//in QuizPreview to exit the edit state when clicking away from a question or choice

// if question or choice is clicked, it's content can be edited
export default function Question(props){

    //if editing mode engaged and specific question index and choice index used,
    //render choice as text input for user to change
    const choiceElements = props.choices.map((choice, choiceIndex)=>{
        if(props.editData.editing && props.editData.questionIndex == props.index && props.editData.choiceIndex == choiceIndex)
            return (<div key={choiceIndex}><input 
                    type="textbox" 
                    onChange={(e)=>props.changeQuestionData(props.index, "choice", e, choiceIndex)}
                    value={choice}
                />
                <input type="button" value="Save" onClick={()=>props.changeEditData(false)}/>
                </div>)
        else
            return (<p key={choiceIndex} className="preview-question" onClick={()=>props.changeEditData(true, props.index, choiceIndex)}>
                {indexToLetter(choiceIndex)}. {choice}
            </p>)
    })
    //if editing mode engaged and specific question used, while choice index is null,
    //render choice as text input for user to change
    const questionElement = props.editData.editing && props.editData.choiceIndex === null && props.editData.questionIndex == props.index?
    <div>
        <input type="textbox" value={props.question} onChange={(e)=>props.changeQuestionData(props.index, "question", e)}/>
        <input type="button" value="Save" onClick={()=>props.changeEditData(false)}/>
    </div>
    :<h3 className="preview-question" onClick={()=>props.changeEditData(true, props.index)}>{props.index + 1}) {props.question}</h3>

    return (
        <div className="preview">
            {questionElement}
            <div>
                {choiceElements}
            </div>
            <p>Answer: {indexToLetter(props.answer)}</p>
            <Divider/>
        </div>
    )
}

function indexToLetter(i){
    switch(i){
        case 0:
            return 'A'
        case 1:
            return 'B'
        case 2:
            return 'C'
        case 3:
            return 'D'
    }
}