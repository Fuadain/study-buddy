import React from 'react'
import Question from './question'
import { Button, Box, Container, Stack } from '@mui/material'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import Sidebar from '../../sidebar/sidebar';
import AxiosContext from '../../components/axios-context';
import axios from 'axios'

//add timer and place submit to side of quiz?

//location holds quiz id passed to it to pull quiz
export default function Quiz(props) {
  //need to have page not pull up if quizId is null
  const {hostname, axiosConfig, email} = React.useContext(AxiosContext)
  const navigate = useNavigate()
  const location = useLocation()
  const {quizIndex=null, classIndex=null} = location?.state || {}
  const {questions, quizName, timeLimit}= props.classes[classIndex]?.quizzes[quizIndex]?props.classes[classIndex].quizzes[quizIndex]:{questions:[], quizName:null, timeLimit:null}
  const [quizData, setQuizData] = React.useState([])
  const [isFinished, setIsFinished] = React.useState(false)
  const [score, setScore] = React.useState(0)

  React.useEffect(()=>{
    if(quizIndex === null)
      navigate("/dashboard")
    setQuizData(prev=>{
      return questions.map((question, index)=>{
        let choices = []
        for(const row in question.choices[0]){
          if(row.includes("option")){
            choices.push(question.choices[0][row])
          }
        }
        
        return {
          id: index,
          question: question.question,
          choices:choices,
          answer: question.answer,
          chosenAnswer: null
        }
      })
    })
    
  },[])
  
  function updateChosenAnswer(id, choice) {
    setQuizData(prevData => {
      let newData = [...prevData]
      newData[id].chosenAnswer = choice
      return newData
    })
  }

  //subject to change based on backend
  function submitAnswers() {
    let finishing = true
    quizData.forEach(element => {
      if (element.chosenAnswer === null) {
        finishing = false
      }
    })
    console.log(`Finished: ${finishing}`)
    if (finishing) {
      //Submit answer data
      let score = 0
      quizData.forEach(element =>{
        if(element.chosenAnswer === element.answer)
          score++
      })
      console.log(`Score: ${score}/${quizData.length}`)

      axios.post(`${hostname}/recordScore`, {
        email: email,
        quizID: 1,
        score: score
      }, axiosConfig)
      .then(res=>{
        console.log(res.data)
      })

      setIsFinished(true)
      setScore(score)
    }
  }

  function exitPage(){
    navigate("/dashboard")
  }

    const QuestionListElements = quizData.map(element => <Question
      key={element.question}
      id={element.id}
      question={element.question}
      choices={element.choices}
      answer={element.answer}
      chooseAnswer={updateChosenAnswer}
      chosenAnswer={element.chosenAnswer}
      isFinished={isFinished}
    />)

    
    return (<Box>
        <Navbar pageName="Quiz"/>
        <Sidebar/>
        <Container maxWidth="sm" sx={{ml: '25vw', mr: '5vw', pt: '3vh'}}>
          <Stack spacing={3}>
            {QuestionListElements}
            <Button
              onClick={isFinished?exitPage:submitAnswers}
              variant="contained"
            >
              {isFinished?"Leave":"Submit"}
            </Button>
            {isFinished?<p>Score: {score}/{quizData.length}</p>:""}
          </Stack>
        </Container>
      </Box>
    )

  }