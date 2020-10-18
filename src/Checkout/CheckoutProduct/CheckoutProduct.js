import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../StateProvider'
function CheckoutProduct({id,image,title,price,rating,count,disable,startPrice}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = ()=>{        
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    const incrementCount = ()=>{
        dispatch({
            type:'INCREMENT_COUNT',
            id:id
        })
    }
    const decrementCount = ()=>{
        dispatch({
            type:'DECREMENT_COUNT',
            id:id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
            <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price.toFixed(2) } <small className="checkoutProduct__startPrice" >{`($${startPrice} per one)`}</small> </strong>
            </p>
            <div className="checkoutProduct__rating">
            {Array(rating).fill().map((_,i)=>
                        <p>⭐</p> 
                    )}
            </div>
                <p> <button onClick={decrementCount}  disabled={disable || !(count>1)}>-</button> {`${count}`} <button disabled={disable} onClick={incrementCount}>+</button></p>
            <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
