import React from 'react';
import './quiz-creator.css';
import { Button, Box, Container, Stack, useThemeProps } from '@mui/material'
import QuizPreview from './comp/quiz-preview'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../../navbar/navbar'
import Sidebar from '../../sidebar/sidebar';
import axios from 'axios'
import AxiosContext from '../../components/axios-context';

export default function QuizCreator(){
    const pageName = "Quiz Creator"
    const navigate = useNavigate()
    const location = useLocation()
    const {className=null} = location?.state || {}
    const [inputData, setInputData] = React.useState({
        quizName: "",
        quizType: "",
        difficulty: 1,
        questionNum: 1,
        testing: false
    })
    const [quizData, setQuizData] = React.useState([])
    const [difficultyElements, setDifficultyElements] = React.useState()
    const quizTypes = ["Math", "English", "History", "Javascript"]
    const [previewQuiz, setPreviewQuiz] = React.useState(false)

    const {hostname, axiosConfig, email} = React.useContext(AxiosContext)

    React.useEffect(()=>{
        setDifficultyElements(()=>{
            let newElements = []
            for(var i = 1; i <= 10; i++){
                newElements.push(<option key={i} value={i.toString()}>{i}</option>)
            }
            return newElements
        })
    },[])

    function changeInputData(event){
        const input = event.target
 
        setInputData(prevData => {
            let newData = {
                ...prevData,
                [input.name]: input.type==="checkbox" ? !input.checked : input.value
            }
            return newData
        })
    }

    function getPreview(){
        if(!previewQuiz)
            setPreviewQuiz(true)
        else{
            //remount
            setPreviewQuiz(false)
            setPreviewQuiz(true)
        }
    }

    function saveQuiz(){
        //api jargon, get id to navigate to quiz assign
        let quizID = null
        if(className !== null){
            axios.post(`${hostname}/createQuiz`,{
                className: className,
                email: email,
                quizName: inputData.quizName,
                quizDifficulty: inputData.difficulty,
                quizSubject: inputData.quizType,
                quizData: quizData
            })
            .then(res=>{
                quizID = res.data.quizID
            })
            navigate("/quiz-assign", {state: {quizID: quizID}})
        } else {
            alert("Error: No Class Selected")
        }
    }

    const quizTypeElements = quizTypes.map(quizType=><option key={quizType} value={quizType}>{quizType}</option>)

    return (
        <Box>
            <Navbar pageName={pageName}/>
            <Sidebar />
            <Stack direction="row" height="88vh" sx={{ml: '25vw', mr: '5vw', pt: '3vh'}}>
                <Box width="50vw" height="auto" sx={{pl:"4px", pr:"4px", mr:"5px", overflowY: 'auto', backgroundColor: "#f2f2f4"}}>
                    {previewQuiz?<QuizPreview 
                        difficulty={inputData.difficulty} 
                        subject={inputData.subject} 
                        questionNum={inputData.questionNum} 
                        testing={inputData.testing}
                        quizData={quizData}
                        setQuizData={setQuizData}
                        />
                        :""}
                </Box>
                
                <Box minWidth="240px" sx={{ml: "auto"}}>
                    <Stack spacing={3}>
                        <Stack>
                            <label>Quiz Name:</label>
                            <input type="text" name="quizName" id="quizName" required value={inputData.testName} onChange={changeInputData}/>
                        </Stack>
                        <Stack>
                            <label>Quiz Type:</label>
                            <select name="quizType" id="quizType" value={inputData.quizType} required onChange={changeInputData}>
                                {quizTypeElements}
                            </select>
                        </Stack>
                        <Stack>
                            <label>Difficulty Level:</label>
                            <select name="difficulty" id="difficulty" value={inputData.difficulty} required onChange={changeInputData}>
                                {difficultyElements}
                            </select>
                        </Stack>
                        <Stack>
                            <label>Number of Questions:</label>
                            <input type="number" name="questionNum" id="questionNum" min="1" max="100" required value={inputData.questionNum} onChange={changeInputData}/>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Button onClick={getPreview} variant="contained">Generate Quiz</Button>
                            {previewQuiz?<Button onClick={saveQuiz} variant="contained">Save</Button>:""}
                        </Stack>
                        {process.env.NODE_ENV=="development"?<Stack direction="row">
                        <h5>Testing Generation:</h5>
                        <input type="checkbox" name="testing" onChange={changeInputData}/>
                        </Stack>:
                        ""
                        }
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}