import React from 'react'
import './Product.css';
import {NavLink} from "react-router-dom";

const Product=({id,title,image,price,rating,count})=>{


    return (
        <div className="product" key={id}>
            <NavLink to={`fullProduct/${id}`} style={{
                textDecoration:'none',
                color:'black'
            }}

           >
            <div className="product__info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong> 
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>
                        <p key={i}>⭐</p>
                    )}
                                                   
                </div>
            </div>
            <img src={image} alt="" className="product__img"/>

                {count > 1 ? <p>count: {count}</p> : null}
            </NavLink>

        </div>
    )
}

export default Product
