import React, {useState} from 'react';
import './Card.css'
const Card = () => {
    const [pan='',setPan] =useState()

    return (
        <div className="card">
            <div className="card__block">
            <span>{pan}</span>
            </div>
            <form className="card__info">
                <label htmlFor="">Cardholder Name</label>
                <input className="card__infoInput" type="text"/>
                <label htmlFor="">PAN</label>
                <input className="card__infoInput" type="text" value={pan} onChange={(e)=>setPan(e.target.value)}/>
                <div className="card__InfoParams">
                    <label htmlFor="">
                    <span>Exp Month</span>
                    <input className="card__infoInput" type="text"/>
                    </label>
                    <label htmlFor="">
                        <span>Exp Year</span>
                    <input className="card__infoInput" type="text"/>
                    </label>
                    <label htmlFor="">
                        <span>CVV</span>
                    <input className="card__infoInput" type="text"/></label>
                </div>
            </form>


        </div>
    );
};

export default Card;