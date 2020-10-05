import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import {Link} from 'react-router-dom'
import Card from "./Card";
function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    const subtotal = basket.reduce((acc,cur)=>acc+cur.price,0);
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout (<Link to ='/checkout'>
                    {basket.length} items
                </Link>)</h1>
               <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user ? user.email : 'Guest'}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
                </div> 

                <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items </h3>
                </div>
                <div className="payment__items">
                    {basket.map(item=>{
                        return <CheckoutProduct
                        id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} />
                    })}
                </div>
                </div> 
               
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <Card/>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Payment
