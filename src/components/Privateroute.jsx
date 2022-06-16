import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    return (
        <>

       { (sessionStorage.getItem('user-info_token')!=null)? children : <Navigate to="/login" />}
        </>
    );
}
export default PrivateRoute