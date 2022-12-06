import React from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";

export default function AddNews() {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = async (data) => {
        await axios.post('http://localhost:4000/news/add', data)
            .then(response => console.log(response));
        reset();
    };
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-md-12">
                <h2 className='text-center'>Add News</h2>
                <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Title:</label>
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
