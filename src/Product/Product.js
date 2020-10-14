import React from 'react'
import './Product.css'
import { useStateValue } from '../StateProvider';

import {Link, NavLink} from "react-router-dom";

function Product({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="product">
            <NavLink to={`fullProduct/${id}`} style={{
                textDecoration:'none',
                color:'black'
            }}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong> 
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>
                        <p>⭐</p> 
                    )}
                                                   
                </div>
            </div>
            <img src={image} alt="" className="product__img"/>

            </NavLink>
        </div>
    )
}

export default Product
