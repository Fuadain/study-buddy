import React from 'react'
import { useReactToPrint } from 'react-to-print'

const pageStyle = `
    @page {margin: 2cm 2cm 2cm 2cm !important}
`

export default function QuizPrint({stopPrinting, quizData, ...props}){
    const printRef = React.useRef()
    const printScreen = useReactToPrint({
        content: ()=>printRef.current,
        onAfterPrint: ()=>stopPrinting()
      })

    React.useEffect(()=>{
        if(quizData)
            printScreen()
    },[quizData, printScreen])

    const pageContent = quizData.map((data, index)=>{
        const choicesElements = data.choices.map(choice=>{
            return <p>{choice}</p>
        })
        const letterAnswer = indexToLetter(data.answer)
        return <div className="print-question">
            <h3>{index+1}) {data.question}</h3>
            {choicesElements}
            {props.copyType==="teacher"?<p>Answer: {letterAnswer}</p>:""}
        </div>
    })

    return(<div style={{display:"none"}}>
        <div ref={printRef}>
            <style>{pageStyle}</style>
            {props.copyType==="teacher"?<h2>Teacher Copy</h2>:""}
            {pageContent}
        </div>
     </div>
    )
}



function indexToLetter(i){
    switch(i){
        case 0:
            return 'A'
        case 1:
            return 'B'
        case 2:
            return 'C'
        case 3:
            return 'D'
    }
}