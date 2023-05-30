import React from 'react'
import Question from './question'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import parsingMultipleMCQ from '../../regex'


export default function Quiz() {
  const [quizData, setQuizData] = React.useState([{
    id: 0,
    question: "test question",
    choices: ["1", "2", "3", "4"],
    // isWritten: false,
    type: 'mcq',
    answer: "1",
    chosenAnswer: ""
  },
    // {
    //     id: 1,
    //     question: "test question 2",
    //     choices: ["4","5","6"],
    //     isWritten: true,
    //     answer: "5",
    //     chosenAnswer: ""
    // }
  ])

  React.useEffect(() => {
    //fetch api and update question data here
    
  }, [])


  //subject to change based on api
  function changeQuizData(data) {
    setQuizData(data)
  }

  function updateChosenAnswer(id, choice) {
    // previous method when not using id to directly change data
    /*
        setQuizData(prevData=>{
            const newData = prevData.map(element=>{
                return element.question === question ?
                    {...element, chosenAnswer: choice}
                    : {...element}
            })
            return newData
        })
        */
    //update method using id, should be faster than previous method
    if (quizData[id].chosenAnswer) return
    setQuizData(prevData => {
      let newData = [...prevData]
      newData[id].chosenAnswer = choice
      return newData
    })
  }

  //subject to change based on backend
  function submitAnswers() {
    let isFinished = true
    const results = quizData.map(element => {
      if (!element.chosenAnswer) {
        isFinished = false
      }
      return isFinished
    })
    if (isFinished) {
      console.log('Finished Quiz')
      //Submit answer data
    }
  }

    const QuestionListElements = quizData.map(element => <Question
      key={Math.random}
      id={element.id}
      question={element.question}
      choices={element.choices}
      /*isWritten={element.isWritten}*/
      type={element.type}
      answer={element.answer}
      chooseAnswer={updateChosenAnswer}
      chosenAnswer={element.chosenAnswer}
    />)


    return (
      <Container maxWidth="sm">
        <Stack spacing={3}>
          {QuestionListElements}
          <Button
            onClick={submitAnswers}
            variant="contained"
          >
            Submit
          </Button>
        </Stack>
      </Container>
    )

  }