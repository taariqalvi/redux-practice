import { ADD_TO_CART } from "../Constants"

export const addToCartFunction = (addData) => {
    return {
        type: "ADD_TO_CART",
        dataPlus: addData
    }
}

// export const removeFromCartFunction = (removeData) => {
//     return {
//         type: "REMOVE_FROM_CART",
//         dataMinus: removeData
//     }
// }