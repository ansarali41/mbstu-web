import React from 'react';
import {useForm} from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import axios from "axios";

export default function AdminAddNotice() {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = async (data) => {
        // console.log(JSON.stringify(data));
        await axios.post('http://localhost:4000/notice/add', data)
            .then(response => console.log(response));
        reset();
    };

    const dashboardStyle = {
        paddingTop: 110,
    }
    return (
        <div className="row container" style={dashboardStyle}>
            <div className="col-md-3">
                <Sidebar/>
            </div>
            <div className="col-md-8 ">
                <h2 className='text-center'>Add Notice</h2>
                <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Title</label>
                    <input className="form-control" {...register('title', {required: true})} />
                    <br/>
                    <label>Description:</label>
                    <textarea className="form-control" {...register('description', {required: true})} />
                    <br/>
                    <label>Pdf link:</label>
                    <input className="form-control"  {...register('pdf', {required: true})} />
                    <br/>
                    <label>Image link:</label>
                    <input className="form-control"  {...register('image', {required: true})} />
                    <br/>

                    <input className="btn btn-success form-control" type="submit"/>
                </form>
            </div>
        </div>
    );
}
