import React from 'react'
import { useReactToPrint } from 'react-to-print'
import AxiosContext from '../../../components/axios-context'
import axios from 'axios'

const pageStyle = `
    @page {margin: 2cm 2cm 2cm 2cm !important}
`

export default function QuizPrint({stopPrinting, ...props}){
    const printRef = React.useRef()
    const printScreen = useReactToPrint({
        content: ()=>printRef.current,
        onAfterPrint: ()=>stopPrinting()
      })
    const [quizData, setQuizData] = React.useState([])
    const {hostname, axiosConfig} = React.useContext(AxiosContext)

    React.useEffect(()=>{
        axios.get(`${hostname}/`, axiosConfig)
        .then(res=>{
            setQuizData()
        })
    },[])

    React.useEffect(()=>{
        if(quizData)
            printScreen()
    },[quizData, printScreen])

    const pageContent = quizData.map((data, index)=>{
        return <div className="print-question">
            <h3>{index+1}) {data.question}</h3>
            <p>{data.choice1}</p>
            <p>{data.choice2}</p>
            <p>{data.choice3}</p>
            <p>{data.choice4}</p>
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