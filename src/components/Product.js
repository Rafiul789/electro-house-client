import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {

    const navigate=useNavigate()

    const navigateToPurchase=id=>{
navigate(`/purchase/${id}`)

    }
const {_id,name,description,price,img,minimumquantity,availablequantity}=product

    return (
        <div>
        <div className=" w-full h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg" src={img} alt="" />

<div className="p-5">
<h1 className="text-2xl text-center">{name}</h1>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{}</p > 
<p> price: {price} $ </p>
<p className="my-2 ">Description:{description} </p>
<p className="font-bold">Minimum Quantity: {minimumquantity} </p>
<p className="font-bold">Available Quantity: {availablequantity} </p>


</div>
<div className="items-center mx-5 my-5 ">  <button onClick={() => navigateToPurchase(_id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   Purchase
   <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
</button>  </div>
    </div>
    </div>
    );
};

export default Product;