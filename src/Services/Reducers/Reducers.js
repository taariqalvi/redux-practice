import { ADD_TO_CART } from "../Constants"


const initialState = {
    cartData: []
}

export default function cartItems(initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...initialState,
                cartData: action.dataPlus
            }
        default:
            return initialState
    }
}