import React, {useEffect, useState} from 'react';
import './FullProduct.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import axios from "../../axios-orders";
import {useStateValue} from "../../StateProvider";

const FullProduct = (props) => {
  const  [product=[],setProduct]=useState();
  const [id=0,setId] = useState();
    const [{basket},dispatch] = useStateValue();
    const addToBasket = ()=>{
        dispatch ({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:product.title,
                image:parseProps("images")[0],
                price:product.price,
                rating:product.rating
            }
        })
    }
    console.log(basket)
  useEffect(()=>{
        axios.get('/fullItem.json')
            .then(res=>{
               let id = props.location.pathname[props.location.pathname.length -1]

                setProduct(res.data[id])
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
                        <li key={i} onMouseOver={()=>setId(i)} onClick={()=>setId(i)}><img src={item} alt=""/></li>
                    )
                })}

            </ul>
            <img src={parseProps("images")[id]} className="fullProduct__mainImage" alt=""/>
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
              <button className="fullProduct__purchaseBtn" onClick={addToBasket}><AddShoppingCartIcon style={{backgroundColor:'#333',color:'white'}}/> <span>Add to basket</span></button>
            </div>
        </div>
    );
};

export default FullProduct;