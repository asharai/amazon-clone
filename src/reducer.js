export const initialState ={
    basket:[],
    cardInfo:{
        pan:'',
        expMonth:'',
        expYear:'',
        cvv:''
    }
};

export const getBasketTotal = (basket) =>{
   return basket?.reduce((amount,item)=>item.price+amount,0)
}
export const reducer = (state,action)=>{
    let newBasket = [...state.basket];
    const idx = state.basket.findIndex((basketItem)=>basketItem.id===action.id);
    switch(action.type){
        case 'ADD_TO_BASKET':
            const check = state.basket.filter((basketItem)=>basketItem.id==action.item.id);
            if(check[0]){
                let nBasket = [...state.basket];
                const id = nBasket.findIndex(basketItem=>basketItem.id ==  check[0].id);
                    nBasket[id].count +=1;
                    nBasket[id].price =  nBasket[id].startPrice *  nBasket[id].count ;
                    return{
                        ...state,
                        basket:nBasket,
                    }

            }

                else{
                    return {
                        ...state,
                        basket:[...state.basket,action.item],
                    }
                }



            case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id);


                if(index >=0){
                   newBasket=newBasket.slice(0,index).concat(newBasket.slice(index+1));
                }
                return {
                    ...state,
                    basket:newBasket
                }
        case 'SET_USER':
                    return{
                        ...state,
                        user:action.user
                    }
        case 'INCREMENT_COUNT':
            newBasket[idx].count+=1
            newBasket[idx].price =  newBasket[idx].startPrice *  newBasket[idx].count ;
            return{
            ...state,
                basket: newBasket
            }
        case 'DECREMENT_COUNT':
            newBasket[idx].count-=1
            newBasket[idx].price =  newBasket[idx].price - newBasket[idx].startPrice;
            return{
                ...state,
                basket: newBasket
            }
        case '':
            return{}
            default:
                return state
        }
       
    
}