import React from 'react';
import Question from './question'
export default function Quiz(){
    const [quizData, setQuizData] = React.useState([{
        id: 0,
        question: "test question",
        answers: ["1","2","3"],
        isWritten: false,
        correctAnswer: "1",
        chosenAnswer: ""
    }])

    React.useEffect(()=>{
        //fetch api and update question data here
    },[])

    //subject to change based on api
    function changeQuizData(data){
        setQuizData(data)
    }

    function updateChosenAnswer(id, choice){
        /* previous method when not using id to directly change data
        setQuizData(prevData=>{
            const newData = prevData.map(element=>{
                return element.question === question ?
                    {...element, chosenAnswer: choice}
                    : {...element}
            })
            return newData
        })*/
        //update method using id, should be faster than previous method
        setQuizData(prevData=>{
            let newData = prevData
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
                                                key={element.id}
                                                id={element.id}
                                                question={element.question}
                                                answers={element.answers}
                                                isWritten={element.isWritten}
                                                correctAnswer={element.correctAnswer}
                                                chooseAnswer={updateChosenAnswer}
                                            />)
    
    
    return (
        <div>
            {QuestionListElements}
            <input type="button" onClick={submitAnswers} value="submit"/>
        </div>
    )
}