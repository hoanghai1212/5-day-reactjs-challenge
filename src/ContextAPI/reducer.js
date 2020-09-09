export const initialState = {
    basket: []
};

const reducer = (state, { type, payload }) =>
{
    switch (type)
    {
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, payload.item] }

        case "REMOVE_FROM_BASKET":
            return { ...state, basket: [...state.basket].filter((_, index) => index !== payload.index) }

        default:
            return state;
    }
}

export default reducer;