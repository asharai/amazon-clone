import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from '../../StateProvider';
import {getBasketTotal} from '../../reducer'
import { useHistory } from 'react-router-dom';
function Subtotal() {
    const [{basket},dispatch]=useStateValue();
    const history = useHistory();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal ( {basket.length>0 ? basket.reduce((acc,cur)=>{
                        return acc + cur.count
                    },0): 0} items):
                        <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
                <button onClick={e=>history.push('/payment')} disabled={!(basket.length>0)}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
