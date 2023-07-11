import React from 'react';
import {Stack} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

export default function Student(props){
    return (
        <Grid xs={1}>
            <Stack direction="row" sx={{backgroundColor: "lightgreen"}}>
                <img src={props.avatar?props.avatar:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"} alt="Student"/>
                <h4>{props.name}</h4>
            </Stack>
        </Grid>
    )
}