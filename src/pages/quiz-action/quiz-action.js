import React from 'react';
import './quiz-action.css';
import QuizTime from './quiz-time'
import Select from 'react-select';

export default function QuizAction(){
    const [inputData, setInputData] = React.useState({
        classes:[],
        startDate:null,
        endDate: null
    })
    const [classOptions, setClassOptions] = React.useState()

    React.useEffect(()=>{
        setClassOptions(()=>{
            const newClasses = [
                {label:"1", value:"1"},
                {label:"2", value:"2"},
                {label:"3", value:"3"}
            ] //api class jargon
            return newClasses
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

    //Keeping this here to deal with any addition inputs that don't need a library
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

    function changeSelectedClasses(selection){
        setInputData(prevData=>{
            return {
                ...prevData,
                classes: selection
            }
        })
    }

    // for assigning to multiple classes, need something better than select
    console.log(inputData.startDate)
    return (
        <form onSubmit={assignQuiz}>
            <button type="button" onClick={printQuiz}>Print Out</button>
            <label>Assign Test To Class</label>
            <Select
                isMulti
                name="classes"
                options={classOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={changeSelectedClasses}
                defaultValue={inputData.classes}
                required
            />
            <QuizTime startDate={inputData.startDate} endDate={inputData.endDate} changeDate={changeDate}/>
            <button type="submit">Assign Quiz</button>
        </form>
    )
}

//old way, but needs functionality like range, preventing past dates, etc
//<input type="date" name="startDate" value={inputData.startDate} required onChange={inputChange}/>
//<input type="date" name="dueDate" value={inputData.dueDate} required onChange={inputChange}/>