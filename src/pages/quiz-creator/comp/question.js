import React from 'react'
import Divider from '@mui/material/Divider'

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
            return (<p key={choiceIndex} onClick={()=>props.changeEditData(true, props.index, choiceIndex)}>
                {choice}
            </p>)
    })
    //if editing mode engaged and specific question used, while choice index is null,
    //render choice as text input for user to change
    const questionElement = props.editData.editing && props.editData.choiceIndex === null && props.editData.questionIndex == props.index?
    <div>
        <input type="textbox" value={props.question} onChange={(e)=>props.changeQuestionData(props.index, "question", e)}/>
        <input type="button" value="Save" onClick={()=>props.changeEditData(false)}/>
    </div>
    :<h3 onClick={()=>props.changeEditData(true, props.index)}>{props.question}</h3>

    return (
        <div>
            {questionElement}
            <div>
                {choiceElements}
            </div>
            <Divider/>
        </div>
    )
}