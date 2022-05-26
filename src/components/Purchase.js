import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import useProductDetails from '../hooks/useProductDetails'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const Purchase = () => {
    const {id}=useParams();
    const [input, setInput] = useState('')
    const [user, loading, error] = useAuthState(auth)

    const [product]=useProductDetails(id)
    
    const inputSubmit=()=>{
        if(input<product.minimumquantity){
            toast("Order minimum Quantity!")
        }
        if(input>product.availablequantity){
            toast('Order Availble Quantity')
    }}

    const handleOrder = event =>{
        event.preventDefault();}




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
<div className="bg-gray-800 mx-5 p-5"> 

     
     <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
     

                    <input type="number" placeholder="Quantity" className="input input-bordered w-full max-w-xs" value={input} onChange={event => setInput(event.target.value)} />  

                     <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" /> 
                        
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input onClick={inputSubmit} type="submit" value="Order" className="btn btn-secondary w-full max-w-xs" />
                    </form>






    
      </div>

        </div>  </>
       
    );
};

export default Purchase;