import { useEffect, useState } from "react";

const useServiceDetail = id =>{
    const [product, setProducts] = useState({});

    useEffect( () =>{
        const url = `https://tranquil-bayou-94751.herokuapp.com/product/${id}`;
        
        fetch(url)
        .then(res=> res.json())
        .then(data => setProducts(data));

    }, [id]);
    return [product]
}

export default useServiceDetail;