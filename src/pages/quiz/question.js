import React from 'react'
import Divider from '@mui/material/Divider'

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
  backgroundColor: "#d2d7db"
}
const correctAnswer = {
  ...answerStyle,
  backgroundColor: "#55f371"
}
const incorrectAnswer = {
  ...answerStyle,
  backgroundColor: "#fa3e41"
}

export default function Question(props){
    let answerElements = ""
    //might be a better way to deal with changing answer style
    
    //Renders red for wrong answer green for correct answer
    const renderAnswers = () => {
      const { answer, chosenAnswer } = props
      if (answer === chosenAnswer) {
        return (chosenAnswerStyle = {
          ...answerStyle,
          backgroundColor: '#55f371',
        })
      } else {
        return (chosenAnswerStyle = {
          ...answerStyle,
          backgroundColor: '#fa3e41',
        })
      }
    }

    

        
    answerElements = props.choices.map((answer, index) => {
      let givenStyle = answerStyle
      if(props.isFinished){
        if(index === props.answer)
          givenStyle = correctAnswer
        else if(index === props.chosenAnswer && props.answer !== props.chosenAnswer)
          givenStyle = incorrectAnswer
      } else {
        givenStyle = index===props.chosenAnswer ? chosenAnswerStyle : answerStyle
      }
      return <p
        key={answer}
        className='question'
        style={givenStyle}
        onClick={()=>props.chooseAnswer(props.id, index)}
        >
          {answer}
      </p>})

    

    return (
        <div>
            <h3>{props.question}</h3>
            <div>
                {answerElements}
            </div>
            <Divider/>
        </div>
    )
}