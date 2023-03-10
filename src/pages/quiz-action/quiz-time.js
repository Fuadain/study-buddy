import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default function QuizTime(props){
    
      const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
    
        return currentDate.getTime() < selectedDate.getTime();
      }
      
      function filterPassedDays(date){
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
    
        return date > yesterday
      }
    
      console.log(props.startDate)
    
      return (
        <div>
          <DatePicker 
            selected={props.startDate} 
            onChange={(date)=>props.changeDate(date, "startDate")}
            selectsStart
            startDate={props.startDate}
            endDate={props.endDate}
            filterTime={filterPassedTime}
            filterDate={(date)=>filterPassedDays(date)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
          />
    
          <DatePicker 
            selected={props.endDate}
            onChange={(date)=>props.changeDate(date, "endDate")}
            selectsEnd
            startDate={props.startDate}
            endDate={props.endDate}
            minDate={props.startDate}
            filterTime={filterPassedTime}
            filterDate={(date)=>filterPassedDays(date)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
      )
}