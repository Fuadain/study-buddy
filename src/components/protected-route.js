import React from 'react'
import {Navigate} from 'react-router-dom'

//if not authenticated, redirect to login
export default function ProtectedRoute(props){
    return(<div>
        {props.authToken?props.children:<Navigate to="/login"/>}
    </div>)
}