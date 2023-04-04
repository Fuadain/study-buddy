import React from 'react'
import Divider from '@mui/material/Divider'
import './question.css'

export default function Question(props) {
  let answerElements = ''
  //might be a better way to deal with changing answer style
  if (!props.isWritten) {
    const answerStyle = {
      border: '2px solid blue',
      borderRadius: '5px',
      paddingTop: '3px',
      paddingBottom: '3px',
      paddingLeft: '6px',
      paddingRight: '6px',
      backgroundColor: 'white',
    }
    let chosenAnswerStyle

    console.log(props.choices[props.answer])

    const renderChosenAnswerStyle = () => {
      const { answer, choices, chosenAnswer } = props
      if (choices[answer] === chosenAnswer) {
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

    answerElements = props.choices.map(answer => (
      <p
        key={answer}
        className='question'
        style={answer === props.chosenAnswer ? renderChosenAnswerStyle() : answerStyle}
        onClick={() => props.chooseAnswer(props.id, answer)}
      >
        {answer}
      </p>
    ))
  }

  function textChange(event) {
    const text = event.target.value
    props.chooseAnswer(props.id, text)
  }

  return (
    <div>
      <h3>{props.question}</h3>
      {props.isWritten ? (
        <textarea className='text-question' onChange={event => textChange(event)} value={props.answer}></textarea>
      ) : (
        <div>{answerElements}</div>
      )}
      <Divider />
    </div>
  )
}
