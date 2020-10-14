import React, {useEffect, useState} from "react";
import "./Home.css";
import Product from "../Product/Product";
import axios from '../axios-orders';
import {Link} from 'react-router-dom'

const  Home=()=> {

  const [products=[],setProducts]= useState();
  useEffect(()=>{
    axios.get('/mainItem.json')
        .then(res=>{
          console.log('hel')
          const  fetchedProducts = [];
          for(let key in res.data){
            fetchedProducts.push({...res.data[key],id:key})
          }
          setProducts(fetchedProducts);
        }).catch(err=>console.log(err))
  },[])

 const productInRow=((a,b)=>{
   return(
       products.slice(a,b).map(item=>{
         return(
             <Product
                 id={item.id}
                 title={item.title}
                 price={item.price}
                 rating={item.rating}
                 image={item.image}
             />

         )
       })
   )
  })
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          {productInRow(0,2)}

        </div>

        <div className="home__row">
          {productInRow(2,5)}
        </div>

        <div className="home__row">
          {productInRow(5,6)}
        </div>
      </div>
    </div>
  );
}

export default Home;