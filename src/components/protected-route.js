import React from 'react'
import {Navigate} from 'react-router-dom'

//if not authenticated, redirect to login
export default function ProtectedRoute(props){
    return(<>
        {props.authToken||process.env.NODE_ENV=="development"?props.children:<Navigate to="/login"/>}
    </>)
}