import React from 'react';
import './quiz-action.css';

export default function QuizAction(){
    const [inputData, setInputData] = React.useState({
        selectedClasses:"",
        startDate:"",
        dueDate:""
    })
    const [classesElements, setClassesElements] = React.useState()

    React.useEffect(()=>{
        setClassesElements(()=>{
            let newElements = [1,2,3]
            //api class jargon
            return newElements
        })
    },[])

    function printQuiz(){
        console.log("Quiz printed")
        //quiz print format jargon
    }

    function assignQuiz(){
        console.log("Quiz Assigned")
        //quiz assign backend jargon
    }

    //need functionality to prevent start date to be after due date
    function inputChange(event){
        const input = event.target
        setInputData(prevData=>{
            const newData = {...prevData, [input.name]: input.value}
            return newData
        })
    }

    return (
        <form onSubmit={assignQuiz}>
            <button type="button" onClick={printQuiz}>Print Out</button>
            <label>Assign Test To Class</label>
            <select name="classes" required multiple value={inputData.selectedClasses} onChange={inputChange}>
                {classesElements}
            </select>
            <input type="date" name="startDate" value={inputData.startDate} required onChange={inputChange}/>
            <input type="date" name="dueDate" value={inputData.dueDate} required onChange={inputChange}/>
            <button type="submit">Assign Quiz</button>
        </form>
    )
}