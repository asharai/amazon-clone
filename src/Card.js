import React, {useState} from 'react';
import './Card.css'
const Card = () => {
    const [pan='',setPan] =useState()
    const [cardholder='',setCardholder] =useState()
    const [month='',setMonth] =useState()
    const [year='',setYear] =useState()
    const [cvv='',setCvv] =useState()

    return (
        <div className="card">
            <div className="card__block">
                <div className="card__blockLogo">VISA</div>

                <p className='card__blockPan'>{pan}</p>
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
                <input className="card__infoInput" type="text" onChange={(e)=>setCardholder(e.target.value)}/>
                <label htmlFor="">PAN</label>
                <input className="card__infoInput" type="text" value={pan} onChange={(e)=>setPan(e.target.value)}/>
                <div className="card__InfoParams">
                    <label htmlFor="">
                    <span>Exp Month</span>
                    <input className="card__infoInput" maxLength={2} type="text" onChange={(e)=>setMonth(e.target.value)}/>
                    </label>
                    <label htmlFor="">
                        <span>Exp Year</span>
                    <input className="card__infoInput" type="text" onChange={(e)=>setYear(e.target.value)}/>
                    </label>
                    <label htmlFor="">
                        <span>CVV</span>
                    <input className="card__infoInput" type="text" onChange={(e)=>setCvv(e.target.value)}/></label>
                </div>
            </form>


        </div>
    );
};

export default Card;