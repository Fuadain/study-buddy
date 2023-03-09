import React from 'react';
import './quiz-gen.css';

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
            for(var i = 0; i < 12; i++){
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
                [inputName]: input.type==="checkbox" ? !input.checked : input.value
            }
            return newData
        })
    }

    function handleSubmit(){
        console.log("Data submitted")
        //link to quiz preview
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="testName" id="testName" required value={inputData.testName} onChange={changeInputData}/>
                <select name="testType" id="testType" value={inputData.testType} required onChange={changeInputData}>
                    <option value="math">Math</option>
                    <option value="english">English</option>
                    <option value="history">History</option>
                </select>
                <select name="gradeLevel" id="gradeLevel" value={inputData.gradeLevel} required onChange={changeInputData}>
                    <option value="k">K</option>
                    {gradeLevelElements}
                </select>
                <input type="number" name="numberOfQuestions" id="numberOfQuestions" required value={inputData.numberOfQuestions} onChange={changeInputData}/>
                <input type="checkbox" name="hasMultipleChoice" id="hasMultipleChoice" checked={inputData.hasMultipleChoice} onChange={changeInputData}/>
                <input type="checkbox" name="hasWritten" id="hasWritten" checked={inputData.hasWritten} onChange={changeInputData}/>
                <input type="text" name="keywords" id="keywords" value={inputData.keywords} onChange={changeInputData}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}