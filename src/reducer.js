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
    
    switch(action.type){
      case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item],
            }
            case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id);
                let newBasket = [...state.basket];

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
        case '':
            return{}
            default:
                return state
        }
       
    
}