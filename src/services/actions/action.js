import { ADD_TO_CART,ADD_TO_CART1,REMOVE_TO_CART } from "../constants"
export const addToCart = (data) =>{
    console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}
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