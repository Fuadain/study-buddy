import React from 'react';
import './quiz-assign.css';
import QuizTime from './comp/quiz-time'
import Select from 'react-select';
import ClassSelectStyle from './comp/class-select-style';
import { Button, Box, Stack, Container, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Navbar from '../../navbar/navbar'
import Sidebar from '../../sidebar/sidebar';

export default function QuizAction(){
    const navigate = useNavigate()
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

    //didn't use navlink because it messed with the mui button's styling
    function goCreator(){
        navigate("/quiz-creator")
    }

    return (
        <Box>
            <Navbar pageName="Assign Quiz"/>
            <Sidebar/>
            <Container maxWidth="sm" sx={{ml: '25vw', mr: '5vw', pt: '3vh'}}>
                <Stack spacing={4} mt={4}>
                    <Stack direction="row" spacing={1}>
                        <Button
                            variant="contained" 
                            onClick={printQuiz}
                            sx={{width:"50%", alignSelf: "center"}}
                        >
                            Print Out
                        </Button>
                        <Button
                            variant="contained" 
                            sx={{width:"50%", alignSelf: "center"}}
                            onClick={goCreator}
                            >
                            Return to Creator
                        </Button>
                        
                    </Stack>
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
        </Box>
    )
}

//react-select library at https://react-select.com/home