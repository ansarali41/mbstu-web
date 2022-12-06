import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
import axios from "axios";
import {UserContext} from "../../../../App";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const [user, setUser] = useContext(UserContext)

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...loginData};
        newData[field] = value;
        setLoginData(newData);
    };

    const handleLogInSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:4000/user/login', loginData)
            .then(response => {
                const token = response?.data?.access_token;
                if (token) {
                    localStorage.setItem('mbstu-login', token);
                    console.log('token set')
                }
            });

    };

    return (
        <div
            className="login"
            style={{
                backgroundImage: 'url(https://naeemur.github.io/mbstu/assets/a/17.jpg)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '90vh',
                paddingTop: 130
            }}
        >
            <br/>
            <div className="col-md-4 m-auto border border-primary bg-dark text-white p-5">
                <p className="text-center">Admin Login</p>
                <form onSubmit={handleLogInSubmit}>
                    <label>Email:</label>
                    <input name="email" type="email" className="form-control" onChange={handleChange}/>
                    <label>Password:</label>
                    <input name="password" className="form-control" onChange={handleChange} id="standard-basic"
                           type="password"/>
                    <br/>
                    <Link to="/admin/add-news">
                        <button className="form-control btn btn-success" type="submit" variant="contained">
                            LOGIN
                        </button>
                    </Link>

                    <div className='text-center'>
                        <Link to="/admin/register">
                            <Button color="inherit">NEW USER?PLEASE REGISTER</Button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
