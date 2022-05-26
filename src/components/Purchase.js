import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useProductDetails from '../hooks/useProductDetails'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Purchase = () => {
    const {id}=useParams();
    const [input, setInput] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [product]=useProductDetails(id)
    
    const inputSubmit=()=>{
        if(input<product.minimumquantity){
            toast("Order minimum Quantity!")
        }
        if(input>product.availablequantity){
            toast('Order Availble Quantity')
    }}



    return (

        <> 
        <h1 className="text-4xl text-center font-semibold">Purchase Your Products</h1>
        
        <div  className="grid lg:grid-cols-2 mx-auto m-8 gap-5 ">


             <div className=" w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">

<img className="rounded-t-lg" src={product.img} alt="" />

<div className="p-5">
<h1 className="text-2xl text-center">{product.name}</h1>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{}</p > 
<p> price: {product.price} $ </p>
<p className="my-2 ">Description:{product.description} </p>
<p className="font-bold">Minimum Quantity: {product.minimumquantity} </p>
<p className="font-bold">Available Quantity: {product.availablequantity} </p>


</div>

    </div> 
<div className="bg-green-500 mx-5"> 
<div className="p-5 flex gap-5">
<label className="label">  <span className="label-text">Product Quantity</span>
   </label>
     <input type="number" className="border border-black" value={input} onChange={event => setInput(event.target.value)} />  </div>

    <div className="items-center mx-5 my-5 ">  <button onClick={() =>inputSubmit()}  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   Order
   <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
</button>  </div>
      </div>

        </div>  </>
       
    );
};

export default Purchase;