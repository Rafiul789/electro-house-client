import { useEffect, useState } from "react";

const useServiceDetail = id =>{
    const [product, setProducts] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/product/${id}`;
        
        fetch(url)
        .then(res=> res.json())
        .then(data => setProducts(data));

    }, [id]);
    return [product]
}

export default useServiceDetail;