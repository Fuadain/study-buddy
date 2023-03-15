import React from 'react';
import './quiz-gen.css';
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function QuizGen(){
    //subject to change
    const [inputData, setInputData] = React.useState({
        testName: "",
        testType: "",
        gradeLevel: "",
        numberOfQuestions: 1,
        hasMultipleChoice: true,
        hasWritten: false,
        keywords: ""
    })
    const [gradeLevelElements, setGradeLevelElements] = React.useState()
    const [testTypeElements, setTestTypeElements] = React.useState()
    //maybe unnecessary to prevent repetitive code, but good enough
    React.useEffect(()=>{
        setGradeLevelElements(()=>{
            let newElements = []
            for(var i = 1; i <= 12; i++){
                newElements.push(<option value={i.toString()}>{i}</option>)
            }
            return newElements
        })
        setTestTypeElements(()=>{
            const testTypes = ["Math", "English", "History"]
            const newElements = testTypes.map(testType=><option value={testType}>{testType}</option>)
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
        console.log("Data submitted")
        //link to quiz preview
    }

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
                        <option value="math">Math</option>
                        <option value="english">English</option>
                        <option value="history">History</option>
                    </select>
                </Stack>
                <Stack>
                    <label>Grade Level:</label>
                    <select name="gradeLevel" id="gradeLevel" value={inputData.gradeLevel} required onChange={changeInputData}>
                        <option value="k">K</option>
                        {gradeLevelElements}
                    </select>
                </Stack>
                <Stack>
                    <label>Number of Questions:</label>
                    <input type="number" name="numberOfQuestions" id="numberOfQuestions" required value={inputData.numberOfQuestions} onChange={changeInputData}/>
                </Stack>
                <Stack spacing={1}>
                    <label>Question Types:</label>
                    <Stack direction="row" spacing={2}>
                        <div>
                            <label>Multiple Choice</label>
                            <input type="checkbox" name="hasMultipleChoice" id="hasMultipleChoice" checked={inputData.hasMultipleChoice} onChange={changeInputData}/>
                        </div>
                        <div>
                            <label>Written Answer</label>
                            <input type="checkbox" name="hasWritten" id="hasWritten" checked={inputData.hasWritten} onChange={changeInputData}/>
                        </div>
                    </Stack>
                </Stack>
                <Stack>
                    <label>Keywords:</label>
                    <textarea name="keywords" id="keywords" onChange={changeInputData}>{inputData.keywords}</textarea>
                </Stack>
                <Button onClick={handleSubmit} variant="contained">Submit</Button>
            </Stack>
        </Container>
    )
}