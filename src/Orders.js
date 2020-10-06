import React, {useState} from 'react';
import axios from './axios-orders'
import CheckoutProduct from "./CheckoutProduct";
const Orders = () => {
    const [orders=[],setOrders]= useState();
    const order = axios.get('/orders.json').then(res=>{
      const  fetchedOrders = [];
      for(let key in res.data){
          fetchedOrders.push({...res.data[key],id:key})
      }
        setOrders(fetchedOrders);
        }).catch(err=>console.log(err))

    return (
        <div>
            <h1>Your Orders</h1>
            <div className="orders__items">
                {orders.map(prop=>{
                    return(
                        <div>
                            <h2>Price:{prop.fullPrice}</h2>
                            <ul>
                                {prop.items.map(product=>{
                                    return(
                                        <CheckoutProduct
                                            id={product.id}
                                            title={product.title}
                                            image={product.image}
                                            price={product.price}
                                            rating={product.rating}
                                        />
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Orders;