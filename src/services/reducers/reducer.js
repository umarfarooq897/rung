import { ADD_TO_CART,ADD_TO_CART1,REMOVE_TO_CART } from "../constants";
const initialState= {
    cardData:[],
    // id: '',
    
}
export function  cardItem(state=initialState,action){
    switch(action.type){
    case ADD_TO_CART:
        console.warn("reducer",action.data)
        return {
            ...state,
            cardData: [...state.cardData, action.data],
          }
    // case ADD_TO_CART1:
    //     // console.warn("reducer",action)
    //     return[
    //         ...state,
    //         {cardData: action.data}
    //     ]
    case REMOVE_TO_CART:
        // console.warn("reducer",action.data.item.product_id)
        // state.pop()
        // console.log("reducer",state)
        return{
            ...state,
        // cartItems: newCartItems
        cardData: state.cardData.filter(item => item.product_id !== action.data.item.product_id)
            
    }
    
    default:
        return state
}
}