import React, {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import {UserContext} from "../../App";

function PrivateRoute({isSignedIn, children}) {
    const storageToken = localStorage.getItem('mbstu-login');
    const [user, setUser] = useContext(UserContext)
    console.log('log:', user)
    if (!isSignedIn) {
        return <Navigate to="/admin/login" replace/>
    }
    return children
}

export default PrivateRoute;