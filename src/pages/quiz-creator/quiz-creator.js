import React from 'react';
import './quiz-creator.css';
import { Button, Box, Container, Stack } from '@mui/material'
import QuizPreview from './comp/quiz-preview'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../navbar/navbar'
import Sidebar from '../../sidebar/sidebar';

export default function QuizCreator(){
    const pageName = "Quiz Creator"
    const navigate = useNavigate()
    const [inputData, setInputData] = React.useState({
        testName: "",
        testType: "",
        difficulty: 1,
        questionNum: 1,
        hasMultipleChoice: true,
        hasWritten: false,
        keywords: ""
    })
    const [difficultyElements, setDifficultyElements] = React.useState()
    const testTypes = ["Math", "English", "History", "Javascript"]
    const [previewQuiz, setPreviewQuiz] = React.useState(false)

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
        setPreviewQuiz(true)
    }

    function saveQuiz(){
        //api jargon, get id to navigate to quiz assign
        navigate("/quiz-assign")
    }

    const testTypeElements = testTypes.map(testType=><option key={testType} value={testType}>{testType}</option>)

    return (
        <Box>
            <Navbar pageName={pageName}/>
            <Sidebar />
            <Stack direction="row" height="88vh" sx={{ml: '25vw', mr: '5vw', pt: '3vh'}}>
            {previewQuiz?<QuizPreview difficulty={inputData.difficulty} subject={inputData.subject} questionNum={inputData.questionNum}/>:""}
                <Box maxWidth="sm" sx={{ml: "auto"}}>
                    <Stack spacing={3}>
                        <Stack>
                            <label>Test Name:</label>
                            <input type="text" name="testName" id="testName" required value={inputData.testName} onChange={changeInputData}/>
                        </Stack>
                        <Stack>
                            <label>Test Type:</label>
                            <select name="testType" id="testType" value={inputData.testType} required onChange={changeInputData}>
                                {testTypeElements}
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
                            <input type="number" name="questionNum" id="questionNum" required value={inputData.questionNum} onChange={changeInputData}/>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Button onClick={getPreview} variant="contained">Generate Quiz</Button>
                            {previewQuiz?<Button onClick={saveQuiz} variant="contained">Save</Button>:""}
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}