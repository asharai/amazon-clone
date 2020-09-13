import React from 'react'
 import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
 import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="
                https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                <div>
                    <h3>{user ? 'Hello ' + user.email : null}</h3>
                <h2 className="checkout__title">
                    Your shopping Basket
                </h2>
               {basket.map(item=>{
                   return (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                   )
               })}
            </div>
            </div>
         
            <div className="checkout__right">
                <h2>The subtotal will go here</h2>
                <Subtotal />
            </div>
        </div>
    )
}
 
export default Checkout
