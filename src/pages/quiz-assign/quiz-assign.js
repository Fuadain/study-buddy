import React from 'react';
import './quiz-assign.css';
import QuizTime from './comp/quiz-time'
import Select from 'react-select';
import ClassSelectStyle from './comp/class-select-style';
import { Button, Box, Stack, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Navbar from '../../navbar/navbar'
import Sidebar from '../../sidebar/sidebar';
import axios from 'axios'
import AxiosContext from '../../components/axios-context';

export default function QuizAction(){
    const navigate = useNavigate()
    const [inputData, setInputData] = React.useState({
        classes:[],
        dueDate: null,
        timeLimit: 30
    })
    const [classOptions, setClassOptions] = React.useState()
    const {hostname, axiosConfig} = React.useContext(AxiosContext)

    React.useEffect(()=>{
        setClassOptions(()=>{
            const newClasses = [
                {label:"1", value:"1"},
                {label:"2", value:"2"},
                {label:"3", value:"3"}
            ] //api class jargon
            return newClasses
        })
        /*
        
        */
    },[])

    function printQuiz(){
        console.log("Quiz printed")
        //quiz print format jargon
    }

    function assignQuiz(){
        //quiz assign backend jargon
        if(inputData.classes && inputData.dueDate){
            axios.post(`${hostname}/`, inputData, axiosConfig)
        } else {
            alert("Invalid input")
        }
    }

    //Keeping this here to deal with any addition inputs that don't need a library
    function changeInput(event){
        const name = event.target.name
        let value = event.target.value
        if(name == "timeLimit" && value < 30)
            value = 30
        setInputData(prevData=>{
            const newData = {...prevData, [name]: value}
            return newData
        })
    }

    function changeDate(date){
        setInputData(prevData=>{
            return {
                ...prevData,
                dueDate: date
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
            <Box sx={{ml: '25vw', mr: '5vw', pt: '2vw'}}>
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
                    <Box>
                        <label>Assign Test To Class:</label>
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
                    </Box>
                    <Stack direction="row" spacing={4} justifyContent="center">
                        <Stack>
                            <label>Due Date:</label>
                            <QuizTime dueDate={inputData.dueDate} changeDate={changeDate}/>
                        </Stack>
                        <Stack>
                            <label>Time Limit (minutes):</label>
                            <input name="timeLimit" type="number" min="30" value={inputData.timeLimit} onChange={changeInput}/>
                        </Stack>
                    </Stack>
                    <Button 
                        variant="contained" 
                        onClick={assignQuiz}
                        sx={{width:"50%", alignSelf: "center"}}
                    >
                        Assign Quiz
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

//react-select library at https://react-select.com/home