import React, { useEffect } from 'react'
// import AuthService from './Services/AuthService'
import { Redirect, Route, Navigate } from 'react-router-dom'
// import Dashboard from './pages/Dashboard';

const PrivateRoute = ({ children }) => {
    var token=''
    const Token = () => {
        token =  sessionStorage.getItem('user-info_token')
        // console.log(token)
    }
    useEffect(() => {
        Token()
    },)
    return (
        <>
       { console.log(token)}
       { setTimeout((token),100) ? children : <Navigate to="/login" />}
        </>
    );
}
export default PrivateRoute