import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://tranquil-bayou-94751.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
        <div className="w-1/3 mx-auto">
            
            <h2 className="text-4xl text-center font-semibold">Please add a review</h2>
            <form className='grid grid-rows-2 mx-auto ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='rating' type="number" {...register("rating")} />
                <input className='mb-2' placeholder='your image' type="text" {...register("img")} />
                <input className="bg-red-500 w-1/3 mx-auto" type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;