import React from 'react'
import Question from './question'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import parsingMultipleMCQ from '../../../regex'

export default function QuizPreview(props){
    const [quizData, setQuizData] = React.useState([{
      id: 0,
      type: 'mcq',
      subject: 'test subject',
      question: "test question",
      choices: [
        "question 1",
        "question 2",
        "question 3",
        "question 4"
      ],
      answer: 4
    }, {
      id: 1,
      type: 'mcq',
      subject: 'test subject',
      question: "test question 1",
      choices: [
        "question 1",
        "question 2",
        "question 3",
        "question 4"
      ],
      answer: 4
    }])
    const [editData, setEditData] = React.useState({
      editing: false,
      questionIndex: null,
      choiceIndex: null
    })

    React.useEffect(()=>{
      
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
      />)

    return (
        <Container maxWidth="sm">
          <Stack spacing={3}>
            {QuestionListElements}
          </Stack>
        </Container>
      )
}











/*
        let difficulty = 7;
        let total = props.questionNum;
    const customTemplate = `Example of a multiple choice question:\n` +
      `Q1. What is the syntax for a for loop in JavaScript?\n` +
      `A. for(i=0, i < 10, i++\n` +
      `B.\n` +
      `C.\n` +
      `D.\n` +
      `Answer: B\n` +
      `On a scale from 1 to 10 with 10 being the hardest and 1 being the easiest, Using the formatting of the example above, generate ${total} different multiple choice ${difficulty} out of 10 difficulty JavaScript question.`;


    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a quiz making bot.' },
        { role: 'user', content: customTemplate },
      ],
      temperature: 0.7,
      top_p: 1,
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(body),
    }

    fetch('https://api.openai.com/v1/chat/completions', requestOptions)
      .then(res => res.json())
      .then(data => {
        const content = parsingMultipleMCQ(data.choices[0].message.content, total);
        const questionArray = []
        content.map((question, index) => {
          questionArray.push({
            id: index,
            type: 'mcq',
            subject: 'JavaScript',
            question: question.question,
            choices: [
              question.option1,
              question.option2,
              question.option3,
              question.option4
            ],
            answer: question.answer,
          });
        });
        setQuizData(questionArray)
      })
      */