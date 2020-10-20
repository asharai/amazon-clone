import React, {useEffect, useState} from 'react';
import axios from '../axios-orders'
import Product from '../Product/Product'
import './Orders.css';
const Orders = () => {
    const [orders=[],setOrders]= useState();
    useEffect(()=>{
        axios.get('/Order.json').then(res=>{
            const  fetchedOrders = [];
            for(let key in res.data){
                fetchedOrders.push({...res.data[key],id:key})
            }
            setOrders(fetchedOrders);
        }).catch(err=>console.log(err))
    },[])

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div >
                {orders.map(prop=>{

                    return(
                        <div className="orders__items">
                            <span>Order: <h3> {prop.id}</h3></span>

                            <ul >
                                {prop.items.map(product=>{
                                    return(
                                        <Product
                                            id={product.id}
                                            title={product.title}
                                            image={product.image}
                                            price={product.price}
                                            rating={product.rating}
                                            count={product.count}
                                        />
                                    )
                                })}
                            </ul>
                            <span>Full Price: <h3> ${prop.fullPrice}</h3></span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Orders;