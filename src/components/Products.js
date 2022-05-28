import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('https://tranquil-bayou-94751.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        
            },[])

    return (
        <div>
              <div className="mt-10 md:grid  md:grid-cols-3  gap-6  ">
                 
                  
                   {products.slice(0,6).map(product=> <Product key={product._id }  product={product} > </Product>   )}  </div>


        </div>
    );
};

export default Products;