import React, {useEffect, useState} from 'react';
import './FullProduct.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import axios from "../../axios-orders";
import {useStateValue} from "../../StateProvider";
import Spinner from "../../Spinner/Spinner";
import ModalUI from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

const FullProduct = (props) => {
    const  [product=[],setProduct]=useState();
    const [id=0,setId] = useState();
    const [openModal=false,setOpenModal] = useState();
    const [loading=false,setLoading] = useState();
    const [{basket},dispatch] = useStateValue();

    const addToBasket = ()=>{
        dispatch ({
            type:'ADD_TO_BASKET',
            item:{
                id:product.id,
                title:product.title,
                image:parseProps("images")[0],
                price:product.price,
                rating:product.rating,
                count:1,
                startPrice:product.price
            }
        })
    }

    const toggleModal = ()=>{
        setOpenModal(!openModal)
    }
    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await axios.get('/fullItem.json')
                .then(res=>{
                    let id = props.location.pathname[props.location.pathname.length -1];
                    setProduct(res.data[id]);
                    setTimeout(()=> setLoading(true),300)
                }).catch(error=>console.log(error))
        }
        fetchData();
    },[])

    const parseProps =(prop)=>{
        let arr = [];
        for(let key in product[prop]){
            arr.push(product[prop][key]);
        }
        return arr

    }


    let content = (
        <Spinner/>
    );
    if(loading){
        content =  (


            <div className="fullProduct">
                <ModalUI open={openModal} closeAfterTransition onClose={toggleModal}>
                    <Fade  in={openModal}>
                        <div className="modal__content">
                            <div className="modal__main">
                                <img src={parseProps("images")[id]} className="modal__mainImage" alt=""/>
                            </div>
                            <div className="modal__description">
                                <ul>
                                    {parseProps("images").map((item,i)=>{
                                        return    <li key={i} onClick={()=>setId(i)} ><img src={item} className={id==i ? 'modal__descriptionImage active' : 'modal__descriptionImage'} alt=""/></li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </Fade>
                </ModalUI>
                <div className="fullProduct__images">
                    <ul>
                        { parseProps("images").map((item,i)=>{
                            return (
                                <li key={i} onMouseOver={()=>setId(i)} onClick={()=>setId(i)}><img  src={item} alt=""/></li>
                            )
                        })}

                    </ul>
                    <img src={parseProps("images")[id]} className="fullProduct__mainImage" onClick={toggleModal} alt=""/>
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


                    <button className="fullProduct__purchaseBtn" onClick={addToBasket}><AddShoppingCartIcon style={{backgroundColor:'#333',color:'white'}}/> <span>Add to basket</span></button>
                </div>

            </div>

        )

    }
    return content
};


export default FullProduct;