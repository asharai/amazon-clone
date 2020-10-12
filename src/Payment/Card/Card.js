import React, {useState} from 'react';
import './Card.css'
import {useStateValue} from "../../StateProvider";
import axios from '../../axios-orders';
const Card = () => {
    const [pan='',setPan] =useState();
    const [cardholder='',setCardholder] =useState();
    const [month='',setMonth] =useState();
    const [year='',setYear] =useState();
    const [cvv='',setCvv] =useState();
    const [{basket,user},dispatch]=useStateValue();
    const subtotal = basket.reduce((acc,cur)=>acc+cur.price,0);
    let paymentSystem = "Payment System";
    if(pan){
        paymentSystem = pan[0]=='4'? <i className="card__blockLogoIcon fab fa-cc-visa"></i> : <i className="card__blockLogoIcon fab fa-cc-mastercard"></i>
    }
    const onChangePan = (pan)=>{
        let str = pan.split('');
        if(pan.length>=12){
            str[11]= str[11]+' '
        }
         if(pan.length>=8){
             str[7]= str[7]+' '
        }
         if(pan.length>=4){
                str[3]= str[3]+' '
            }
            return str
            }
        const makeOrder = ()=>{
        axios.post('/orders.json',{
          items:basket,
            fullPrice:subtotal
        }).then((res)=>console.log(res))
            .catch((err)=>console.log(err))
        }
    return (
        <div className="card">
            <div className="card__block">
                <div className="card__blockLogo">
                    {paymentSystem}
                </div>

                    <div className="card__blockChip"
                      >
                    </div>

                <p className='card__blockPan'>
                {onChangePan(pan)}
                </p>
                    <ul className="card__blockInfo">
                        <li>
                            <span> CARD HOLDER</span>
                            <p>{cardholder}</p>
                        </li>
                        <li>
                            <span> EXPIES</span>
                            <p>{month}
                            {year.length > 0 || month.length > 0 ?
                            "/":null}
                            {year}</p>
                        </li>

                        <li>
                            <span>CVV</span>

                            <p>{cvv}</p>
                        </li>

                    </ul>
            </div>
            <form className="card__info">
                <label htmlFor="">Cardholder Name</label>
                <input className="card__infoInput"  type="text" onChange={(e)=>setCardholder(e.target.value.toUpperCase())}/>
                <label htmlFor="" >PAN</label>
                <input className="card__infoInput" type="text" maxLength={16} value={pan} onChange={(e)=>setPan(e.target.value)}/>
                <div className="card__InfoParams">
                    <label htmlFor="">
                    <span>Exp Month</span>
                    <input className="card__infoInput" maxLength={2} type="text" onChange={(e)=>setMonth(e.target.value)}/>
                    </label>
                    <label htmlFor="">
                        <span>Exp Year</span>
                    <input className="card__infoInput" maxLength={2} type="text" onChange={(e)=>setYear(e.target.value)}/>
                    </label>
                    <label htmlFor="">
                        <span>CVV</span>
                    <input className="card__infoInput" maxLength={3} type="text" onChange={(e)=>setCvv(e.target.value)}/></label>
                </div>
                <div className="card__pay">
                    <p>Payment Amount: <span> {subtotal}$</span></p>
                    <a href="#" onClick={makeOrder}>PAY</a>
                </div>
            </form>


        </div>
    );
};

export default Card;