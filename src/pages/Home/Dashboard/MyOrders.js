import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`https://tranquil-bayou-94751.herokuapp.com/order?customerName=${user.email}`)
                .then(res =>res.json()) 
                .then(data => setOrders(data));
        }
    }, [user])

    
    return (
        <div>
            <h1  className="text-4xl text-center font-semibold mt-5 mb-2">Your Active   Orders:{orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Name</th>
                            <th>Product</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{order.customerName}</td>
                                <td>{order.name}</td>
                                <td>{order.phone}</td>
                                <td>{order.quantity}</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;