import React from 'react';
import './quiz-assign.css';
import QuizTime from './comp/quiz-time'
import Select from 'react-select';
import ClassSelectStyle from './comp/class-select-style';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

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
    /*
    function inputChange(event){
        const input = event.target
        setInputData(prevData=>{
            const newData = {...prevData, [input.name]: input.value}
            return newData
        })
    }
    */

    function changeDate(date, name){
        let newDate = date
        setInputData(prevData => {
            //this if statement prevents the endDate from being before the start date
            if(prevData.startDate && name==="endDate" && date < prevData.startDate){
                newDate = prevData.startDate
            } else if (prevData.endDate && name==="startDate" && date > prevData.endDate){
                return {
                    startDate: date,
                    endDate: date
                }
            }
            return {
                ...prevData,
                [name]: newDate
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
        <Container maxWidth="sm">
            <Stack spacing={4} mt={4}>
                <Button
                    variant="contained" 
                    onClick={printQuiz}
                    sx={{width:"50%", alignSelf: "center"}}
                >
                    Print Out
                </Button>
                <Divider/>
                <div>
                    <label>Assign Test To Class</label>
                    <Select
                        isMulti
                        name="classes"
                        options={classOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={changeSelectedClasses}
                        defaultValue={inputData.classes}
                        styles={ClassSelectStyle}
                        required
                    />
                </div>
                <QuizTime startDate={inputData.startDate} endDate={inputData.endDate} changeDate={changeDate}/>
                <Button 
                    variant="contained" 
                    onClick={assignQuiz}
                    sx={{width:"50%", alignSelf: "center"}}
                >
                    Assign Quiz
                </Button>
            </Stack>
        </Container>
    )
}

//react-select library at https://react-select.com/home