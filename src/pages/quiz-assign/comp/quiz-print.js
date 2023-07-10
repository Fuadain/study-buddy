import React from 'react'
import { useReactToPrint } from 'react-to-print'
import AxiosContext from '../../../components/axios-context'
import axios from 'axios'

const pageStyle = `
    @page {margin: 2cm 2cm 2cm 2cm !important}
`

export default function QuizPrint({stopPrinting, quizData, ...props}){
    const printRef = React.useRef()
    const printScreen = useReactToPrint({
        content: ()=>printRef.current,
        onAfterPrint: ()=>stopPrinting()
      })
    const {hostname, axiosConfig} = React.useContext(AxiosContext)

    React.useEffect(()=>{
        if(quizData)
            printScreen()
    },[quizData, printScreen])

    const pageContent = quizData.map((data, index)=>{
        const choicesElements = data.choices.map(choice=>{
            return <p>{choice}</p>
        })
        return <div className="print-question">
            <h3>{index+1}) {data.question}</h3>
            {choicesElements}
        </div>
    })

    return(<div style={{display:"none"}}>
        <div ref={printRef}>
            <style>{pageStyle}</style>
            {pageContent}
        </div>
     </div>
    )
}