import { ADD_TO_CART,INCREMENT,DECREMENT,REMOVE_TO_CART,TOTAL_PRICE } from "../constants";
const initialState= {
    cardData:[],
    // id: '',
    
}
export function  cardItem(state=initialState,action){
    switch(action.type){
    case ADD_TO_CART:
        const item = state.cardData.find(
            product => product.product_id === action.data.product_id,
          );
        //   console.warn("reducer",item)
          if (item) {
            //   var qty = 0;
            return {
              ...state,
              cardData: state.cardData.map(item => item.product_id === action.data.product_id
                ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: (action.data.Price * (item.quantity+1)),
                }
                : item
              ),
            }
        };
        console.warn("reducer",action.data.quantity) ;
        return {
            ...state,
            cardData: [...state.cardData, action.data],
            totalPrice: (action.data.Price * action.data.quantity),
        }
        // return {
        //     ...state,
        //     cardData: [...state.cardData, action.data],
        //   }
        case INCREMENT:
            const items = state.cardData.find(
                product => product.product_id === action.data.product_id,
                );
              //   console.warn("inicre",items)
              // console.warn("reducer",items)
              if (items) {
                //   var qty = 0;
                return {
                  ...state,
                  cardData: state.cardData.map(item => item.product_id === action.data.product_id
                    ? {
                      ...item,
                      quantity: item.quantity + 1,
                      totalPrice: (item.Price * (item.quantity+1)),
                    }
                    : item
                  ),
                }
            };
            return{
              ...state,
            cardData: [...state.cardData, action.data,],
            totalPrice: (action.data.Price * action.data.quantity),

            }
       
        case DECREMENT:
          if(action.data.quantity>1){
            const itemdec = state.cardData.find(
                product => product.product_id === action.data.product_id,
                );
                // console.warn("inicre",itemdec)
              console.warn("reducer",itemdec)
              if (itemdec) {
                //   var qty = 0;
                return {
                  ...state,
                  cardData: state.cardData.map(item => item.product_id === action.data.product_id
                    ? {
                      ...itemdec,
                      quantity: item.quantity - 1,
                      totalPrice: (item.Price * (item.quantity-1)),
                    }
                    : item
                  ),
                }
            };
            // console.warn("decre",item)
            return{
              ...state,
              cardData: [...state.cardData, action.data],
              totalPrice: (action.data.Price * action.data.quantity),
            }
          }

    case TOTAL_PRICE:
      console.warn("decre",action.data)
        return{
          ...state,
          discount: [action.data],   
    }
    case REMOVE_TO_CART:
        return{
            ...state,
        cardData: state.cardData.filter(item => item.product_id !== action.data.item.product_id)      
    }
    
    default:
        return state
}
}