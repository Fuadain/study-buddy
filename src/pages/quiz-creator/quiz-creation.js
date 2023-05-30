import React from 'react';
import './quiz-creation.css';
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import QuizPreview from './comp/quiz-preview'

export default function QuizGen(){
    //subject to change
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

    function handleSubmit(){
        setPreviewQuiz(true)
    }

    const testTypeElements = testTypes.map(testType=><option key={testType} value={testType}>{testType}</option>)

    return (
        <Container maxWidth="sm">
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
                <Button onClick={handleSubmit} variant="contained">Generate Quiz</Button>
            </Stack>
            {previewQuiz?<QuizPreview difficulty={inputData.difficulty} subject={inputData.subject} questionNum={inputData.questionNum}/>:""}
        </Container>
    )
}