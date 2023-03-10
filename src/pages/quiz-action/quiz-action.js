import React from 'react';
import './quiz-action.css';
import QuizTime from './quiz-time'

export default function QuizAction(){
    const [inputData, setInputData] = React.useState({
        classes:[],
        startDate:null,
        endDate: null
    })
    const [classesElements, setClassesElements] = React.useState()

    React.useEffect(()=>{
        setClassesElements(()=>{
            
            const instructorsClasses = [1,2,3] //api class jargon
            const newElements = instructorsClasses.map(element=><option key={element} value={element}>{element}</option>)

            return newElements
        })
    },[])

    function printQuiz(){
        console.log("Quiz printed")
        //quiz print format jargon
    }

    function assignQuiz(){
        console.log("Quiz Assigned")
        console.log(inputData)
        //quiz assign backend jargon
    }

    function inputChange(event){
        const input = event.target
        setInputData(prevData=>{
            const newData = {...prevData, [input.name]: input.value}
            return newData
        })
    }

    function changeDate(date, name){
        setInputData(prevData => {
          return {
            ...prevData,
            [name]: date
          }
        })
    }

    // for assigning to multiple classes, need something better than select
    console.log(inputData.startDate)
    return (
        <form onSubmit={assignQuiz}>
            <button type="button" onClick={printQuiz}>Print Out</button>
            <label>Assign Test To Class</label>
            <select name="classes" required multiple value={inputData.selectedClasses} onChange={inputChange}>
                {classesElements}
            </select>
            <QuizTime startDate={inputData.startDate} endDate={inputData.endDate} changeDate={changeDate}/>
            <button type="submit">Assign Quiz</button>
        </form>
    )
}

//old way, but needs functionality like range, preventing past dates, etc
//<input type="date" name="startDate" value={inputData.startDate} required onChange={inputChange}/>
//<input type="date" name="dueDate" value={inputData.dueDate} required onChange={inputChange}/>