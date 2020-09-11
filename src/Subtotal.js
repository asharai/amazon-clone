import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from './StateProvider'
function Subtotal() {
    const [{basket},dispatch]=useStateValue();
    const getTotal = ()=>{
        return basket.reduce((acc,cur)=>{
          return  acc + cur.price
        },0)
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal ({basket.length} items):
                        <strong>{getTotal()}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={basket.length}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
                <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
