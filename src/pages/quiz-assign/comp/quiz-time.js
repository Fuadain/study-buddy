import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Stack from '@mui/material/Stack';

export default function QuizTime(props){
    
      const filterPassedTime = (time, isEnd) => {
        let currentDate 
        const selectedDate = new Date(time);
        if(!isEnd){
          currentDate = new Date();
        } else {
          currentDate = props.dueDate?props.dueDate:new Date(time)
        }
        return currentDate.getTime() < selectedDate.getTime();
      }
      
      function filterPassedDays(date){
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
    
        return date > yesterday
      }
    
      return (
            <DatePicker 
              selected={props.dueDate} 
              onChange={(date)=>props.changeDate(date)}
              selectsStart
              filterTime={(time)=>filterPassedTime(time, false)}
              filterDate={(date)=>filterPassedDays(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
      )
}