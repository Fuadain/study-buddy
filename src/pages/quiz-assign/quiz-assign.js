import React from 'react';
import './quiz-assign.css';
import QuizTime from './comp/quiz-time'
import QuizPrint from './comp/quiz-print'
import { Button, Box, Stack, Divider } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../../navbar/navbar'
import Sidebar from '../../sidebar/sidebar';
import axios from 'axios'
import AxiosContext from '../../components/axios-context';

export default function QuizAction(props){
    const navigate = useNavigate()
    const location = useLocation()
    const {quizID=null, classIndex=null} = location?.state || {}
    const [quizData, setQuizData] = React.useState([])
    const [inputData, setInputData] = React.useState({
        dueDate: null,
        timeLimit: 30
    })
    const [printing, setPrinting] = React.useState()
    const {hostname, axiosConfig, email} = React.useContext(AxiosContext)
    
    React.useEffect(()=>{
        if(classIndex !== null){
            let quizIndex = null
            props.classes[classIndex].quizzes.forEach((quiz, index)=>{
                if(quiz.quizID == quizID)
                    quizIndex = index
            })
        setQuizData(prev=>{
            return props.classes[classIndex].quizzes[quizIndex].questions.map((question, index)=>{
            let choices = []
            for(const row in question.choices[0]){
                if(row.includes("option")){
                choices.push(question.choices[0][row])
                }
            }
            console.log(choices)
            return {
                id: index,
                question: question.question,
                choices:choices,
                answer: question.answer,
                chosenAnswer: null
            }
            })
        })
    }
    },[classIndex])

    function printQuiz(bool){
        setPrinting(bool)
    }

    function assignQuiz(){
        //quiz assign backend jargon
        axios.post(`${hostname}/setQuizDetails`, {
            dueDate: inputData.dueDate.toJSON().slice(0, 19).replace('T', ' '),
            timeLimit: inputData.timeLimit,
            quizID: quizID
        }, axiosConfig)
        .then(res=>{
            console.log(res.data)
        })
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
                            onClick={()=>printQuiz(true)}
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
                    {printing?<QuizPrint stopPrinting={()=>printQuiz(false)} quizData={quizData}/>:""}
                </Stack>
            </Box>
        </Box>
    )
}

//react-select library at https://react-select.com/home