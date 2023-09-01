import React from 'react';
import {Stack} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

export default function Student(props){
    return (
        <Grid xs={4} md={1}>
            <Stack direction="row" 
                    sx={{
                        backgroundColor: "lightgreen",
                        height:{
                            xs: 130,
                            sm: 50
                            },
                        flexDirection:{
                            xs: 'column',
                            sm: 'row'
                        },
                        justifyContent:{
                            xs:'center',
                            sm:'space-between'
                        },
                        alignItems:{
                            xs:'center'
                        },
                        paddingRight:{
                            sm:'20px'
                        }
                        }}>
                <img src={props.item.image} alt="Student"/>
                <h4>{props.item.name}</h4>
                <p sx={{
                    margin:{
                        xs:0
                    }
                }}>Grade: {props.item.grade}</p>
            </Stack>
        </Grid>
    )
}
