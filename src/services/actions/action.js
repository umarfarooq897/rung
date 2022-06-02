import { ADD_TO_CART,INCREMENT,DECREMENT,REMOVE_TO_CART } from "../constants"
export const addToCart = (data) =>{
    console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const Incre = (data) =>{
    console.warn("action",data)
    return {
        type:INCREMENT,
        data:data
    }
}
export const Decre = (data) =>{
    console.warn("action",data)
    return {
        type:DECREMENT,
        data:data
    }
}
// export const adjustquantity = (data) =>{
//     console.warn("action",data)
//     return {
//         type:ADDJUST_QUANTITY,
//         data:data
//     }
// }
// export const addToCart1 = (data) =>{
//     // console.warn("action",data)
//     return {
//         type:ADD_TO_CART1,
//         data:data
//     }
// }
export const removeToCart = (data) =>{
    // console.warn("removeaction",data)
    return {
        type:REMOVE_TO_CART,
        data:data
    }
}