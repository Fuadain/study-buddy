import React from 'react'
import Question from './question'
import { Button, Box, Container, Stack } from '@mui/material'
import parsingMultipleMCQ from '../../regex'
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import Sidebar from '../../sidebar/sidebar';

//add timer and place submit to side of quiz?

//location holds quiz id passed to it to pull quiz
export default function Quiz({location}) {
  //need to have page not pull up if quizId is null
  const {quizId=null} = useLocation()
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
    /*
    axios.get(`${props.hostname}/quiz/${quizId}`)
    .then(res=>{
      need:
        quiz name
        question list {question, choices, correct answer}
    })
    */
  }, [])


  //subject to change based on api
  function changeQuizData(data) {
    setQuizData(data)
  }

  function updateChosenAnswer(id, choice) {
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


    return (<Box>
        <Navbar pageName="Quiz"/>
        <Sidebar/>
        <Container maxWidth="sm" sx={{ml: '25vw', mr: '5vw', pt: '3vh'}}>
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
      </Box>
    )

  }