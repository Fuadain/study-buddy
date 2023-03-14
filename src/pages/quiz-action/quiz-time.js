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
          currentDate = props.startDate?props.startDate:new Date(time)
        }
        return currentDate.getTime() < selectedDate.getTime();
      }
      
      function filterPassedDays(date){
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
    
        return date > yesterday
      }
    
      console.log(props.startDate)
    
      return (
        <Stack direction="row" spacing={2}>
          <div>
            <label>Start Time</label>
            <DatePicker 
              selected={props.startDate} 
              onChange={(date)=>props.changeDate(date, "startDate")}
              selectsStart
              startDate={props.startDate}
              endDate={props.endDate}
              filterTime={(time)=>filterPassedTime(time, false)}
              filterDate={(date)=>filterPassedDays(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          <div>
            <label>End Time</label>
            <DatePicker 
              selected={props.endDate}
              onChange={(date)=>props.changeDate(date, "endDate")}
              selectsEnd
              startDate={props.startDate}
              endDate={props.endDate}
              minDate={props.startDate}
              filterTime={(time)=>filterPassedTime(time, true)}
              filterDate={(date)=>filterPassedDays(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
        </Stack>
      )
}