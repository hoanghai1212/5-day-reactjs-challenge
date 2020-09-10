export const initialState = {
    basket: [],
    user: null
};

//Selector
export const getBasketTotal = (basket) => basket?.reduce((sum, currentProd) => (sum + currentProd.price), 0);

const reducer = (state, { type, payload }) =>
{
    switch (type)
    {
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, payload.item] }

        case "REMOVE_FROM_BASKET":
            return { ...state, basket: [...state.basket].filter((_, index) => index !== payload.index) }

        case "SET_USER":
            return { ...state, user: payload.user }

        default:
            return state;
    }
}

export default reducer;