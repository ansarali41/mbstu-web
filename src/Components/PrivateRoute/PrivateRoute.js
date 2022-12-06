import React, {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import {UserContext} from "../../App";
import jwt_decode from "jwt-decode";

function PrivateRoute({children}) {
    const storageToken = localStorage.getItem('mbstu-login');

    const decodedJWT = jwt_decode(storageToken);
 
    const [user, setUser] = useContext(UserContext)

    console.log('log:', user)
    if (!user) {
        return <Navigate to="/admin/login" replace/>
    }
    return children
}

export default PrivateRoute;