import React from 'react'
import { Navigate } from 'react-router-dom'

// if already authenticated, redirect to home
export default function UnprotectedRoute(props){
    return(<div>
        {!props.authToken||process.env.NODE_ENV=="development"?props.children:<Navigate to="/dashboard"/>}
    </div>)
}