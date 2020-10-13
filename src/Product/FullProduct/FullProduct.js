import React, {useEffect, useState} from 'react';
import './FullProduct.css'
import axios from "../../axios-orders";

const FullProduct = (props) => {
  const  [product=[],setProduct]=useState();
  useEffect(()=>{
        axios.get('/fullItem.json')
            .then(res=>{
                console.log(res.data[0])
                setProduct(res.data[0])
            }).catch(error=>console.log(error))
    },[])
const parseProps =(prop)=>{
      let arr = [];
      for(let key in product[prop]){
          arr.push(product[prop][key]);
      }
          return arr

}
    return (
        <div className="fullProduct">
        <div className="fullProduct__images">
            <ul>
                { parseProps("images").map((item,i)=>{
                    return (
                        <li key={i}><img src={item} alt=""/></li>
                    )
                })}

            </ul>
            <img src={parseProps("images")[0]} className="fullProduct__mainImage" alt=""/>
        </div>
            <div className="fullProduct__info">
                <h2 className="fullProduct__title">{product.title}</h2>
                <h4 className="fullProduct__brand"></h4>
                <p className="fullProduct__rating">{Array(product.rating).fill().map((_,i)=>
                    <span>⭐</span>
                )}</p>
                <ul className="fullProduct__params">

                </ul>
                <div className="fullProduct__description">
                    <h3 className="fullProduct__descriptionTitle">About this item</h3>
                    <ul className="fullProduct__descriptionList">
                        { parseProps("description").map((item,i)=>{
                            return (
                                <li key={i}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="fullProduct__purchase">
                <h3 className="fullProduct__purchaseTittle">Buy used:{`$${product.price}`}</h3>
                <h3 className="fullProduct__purchaseTittle">Used:</h3>
                <p>Sold by</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default FullProduct;