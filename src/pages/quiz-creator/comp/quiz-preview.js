import React from 'react'
import Question from './question'
import {Button, Box, Container, Stack} from '@mui/material'
import axios from 'axios'

export default function QuizPreview(props){
    const [quizData, setQuizData] = React.useState([])
    const [editData, setEditData] = React.useState({
      editing: false,
      questionIndex: null,
      choiceIndex: null
    })

    React.useEffect(()=>{
      //for production, remove test
      axios.post("https://study-gen.up.railway.app/", {
        difficulty: props.difficulty, 
        subject: props.subject, 
        questionNum: props.questionNum,
        test: props.testing
      })
      .then(res=>{
        setQuizData(res.data.quiz)
      })
    },[])

    function changeEditData(editing, index=null, choiceIndex=null){
      if(editing)
        setEditData({
          editing: true,
          questionIndex: index,
          choiceIndex: choiceIndex
        })
      else
        setEditData({
          editing: false,
          questionIndex: null,
          choiceIndex: null
        })
    }

    // question index, question or choice, user input, choice index
    function changeQuestionData(index, type, event, choice){
        const data = event.target.value
        setQuizData(prev=>{
          let newData = [...prev]
          if(type == "question")
            newData[index].question = data
          else if(type == "choice")
            newData[index].choices[choice] = data
          return newData
        })
    }

    const QuestionListElements = quizData.map((question, index)=>
      <Question 
        key={question.question}
        index={index} 
        question={question.question} 
        choices={question.choices} 
        changeQuestionData={changeQuestionData} 
        editData={editData}
        changeEditData={changeEditData}
        answer={question.answer}
      />)

    if(!quizData)
      return (<div>Generating Quiz...</div>)

    return (
          <Stack spacing={3} >
            {QuestionListElements}
          </Stack>
      )
}