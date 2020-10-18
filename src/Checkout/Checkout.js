import React,{forwardRef} from 'react'
 import './Checkout.css';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
 import { useStateValue } from '../StateProvider';
 import FlipMove from 'react-flip-move';
import Subtotal from './Subtotal/Subtotal'
function Checkout(props) {
    const [{basket,user},dispatch] = useStateValue();

console.log(basket)
const FunctionalArticle = forwardRef((props, ref) =>{
    return (
    <div ref={ref}>

    <CheckoutProduct
                    id={props.id}
                    title={props.title}
                    image={props.image}
                    price={props.price}
                    rating={props.rating}
                    count={props.count}
                    startPrice={props.startPrice}
                    disable = {false}
                    />
    </div> )
  });
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="
                https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                <div>
                    <h3>{user ? 'Hello ' + user.email : null}</h3>
                <h2 className="checkout__title">
                    Your shopping Basket
                </h2>
                <FlipMove>
               {basket.map(item=>{
                   console.log(item)
                   return (
                  <FunctionalArticle key={item.id} {...item}/>
                   )
               })}
               </FlipMove>
            </div>
            </div>
         
            <div className="checkout__right">
                <h2>The subtotal will go here</h2>
                <Subtotal />
            </div>
        </div>
    )
}
 
export default Checkout
