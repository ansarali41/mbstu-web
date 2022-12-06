import React, {useState} from 'react';
import {Button} from '@mui/material';

import {Link} from 'react-router-dom';
import axios from "axios";

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...loginData};
        newData[field] = value;
        setLoginData(newData);
    };
    const handleLogInSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:6000/user/signup', loginData)
            .then(response => alert(response?.data?.message));
    };
    return (
        <div
            className="row"
            style={{
                backgroundImage: 'url(https://naeemur.github.io/mbstu/assets/a/17.jpg)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '90vh',
                paddingTop: 130
            }}
        >
            <div className="col-md-5 m-auto mt-5 ">
                <div className="card bg-dark text-white">
                    <div className="card-body">
                        <h4 className="text-center">Admin Registration</h4>

                        <form onSubmit={handleLogInSubmit}>
                            <label>Full-Name</label>
                            <input name="name" type="text" className="form-control" onChange={handleChange}/>
                            <label>User-Name</label>
                            <input name="username" type="text" className="form-control" onChange={handleChange}/>
                            <label>Email</label>
                            <input name="email" type="email" className="form-control" onChange={handleChange}/>
                            <label>Password</label>
                            <input name="password" className="form-control" onChange={handleChange} id="standard-basic"
                                   type="password"/>
                            <br/>
                            <button className="form-control btn btn-success" type="submit" variant="contained">
                                LOGIN
                            </button>

                            <div className='text-center'>
                                <Link to="/admin/login">
                                    <Button color="inherit">Already have account?please Login</Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
