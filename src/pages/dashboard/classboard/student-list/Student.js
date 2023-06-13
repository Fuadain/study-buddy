import React from 'react';
import {Stack} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

export default function Student(props){
    return (
        <Grid xs={1}>
            <Stack direction="row" sx={{backgroundColor: "lightgreen"}}>
                <img src={props.item.image} alt="Student"/>
                <h4>{props.item.name}</h4>
                <p>Grade: {props.item.grade}</p>
            </Stack>
        </Grid>
    )
}