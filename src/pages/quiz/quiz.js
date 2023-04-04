import React from 'react';
import Question from './question'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import parsingMultipleMCQ from '../../regex';

export default function Quiz(){
    const [quizData, setQuizData] = React.useState([{
        id: 0,
        question: "test question",
        choices: ["1","2","3"],
        isWritten: false,
        answer: "1",
        chosenAnswer: ""
    },
    {
        id: 1,
        question: "test question 2",
        choices: ["4","5","6"],
        isWritten: true,
        answer: "5",
        chosenAnswer: ""
    }])

    React.useEffect(()=>{
        //fetch api and update question data here
        let difficulty = 7;
        let total = 2;
        const customTemplate = `Example of a multiple choice question:\n`+
        `Q1. What is the syntax for a for loop in JavaScript?\n`+
        `A. for(i=0, i < 10, i++\n`+
        `B.\n`+
        `C.\n`+
        `D.\n`+
        `Answer: B\n`+
        `On a scale from 1 to 10 with 10 being the hardest and 1 being the easiest, Using the formatting of the example above, generate ${total} different multiple choice ${difficulty} out of 10 difficulty JavaScript question.`;

        const body = {
            "model": "gpt-3.5-turbo",
            "messages": [
                {"role": "system", "content": "You are a quiz making bot."},
                {"role": "user", "content": customTemplate}
            ],
            "temperature": 0.7,
            "top_p": 1
        }

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
            body: JSON.stringify(body)
        }

        fetch('https://api.openai.com/v1/chat/completions', requestOptions)
            .then(res => res.json())
            .then(data => {
                const content = parsingMultipleMCQ(data.choices[0].message.content, total);
                const questionArray =[]
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
                    isWritten: false,
                    chosenAnswer: ''
                    });
                });
                setQuizData(prevData => questionArray)
            })
    },[])

    //subject to change based on api
    function changeQuizData(data){
        setQuizData(data)
    }

    function updateChosenAnswer(id, choice){
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
        setQuizData(prevData=>{
            let newData = [...prevData]
            newData[id].chosenAnswer = choice
            return newData
        })
        
    }

    //subject to change based on backend
    function submitAnswers(){
        let isFinished = true
        const results = quizData.map(element => {
            if(!element.chosenAnswer){
                isFinished = false
            }
            return isFinished
        })
        if(isFinished){
            console.log("Finished Quiz")
            //Submit answer data
        }
    }
    const QuestionListElements = quizData.map(element=><Question
                                                key={Math.random}
                                                id={element.id}
                                                question={element.question}
                                                choices={element.choices}
                                                isWritten={element.isWritten}
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