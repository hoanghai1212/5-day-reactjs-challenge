export const initialState = {
    basket: [],
    user: null
};

//Selector
export const getBasketTotal = (basket) => basket?.reduce((sum, currentProd) => (sum + currentProd.price * currentProd.quantity), 0);
export const getBasketTotalItem = (basket) => basket?.reduce((sum, currentProd) => (sum + +currentProd.quantity), 0);
const reducer = (state, { type, payload }) =>
{
    switch (type)
    {
        case "ADD_TO_BASKET": {
            let newBasket = [...state.basket];
            const foundItem = newBasket.find(item => item.id === payload.item.id)
            if (foundItem)
            {
                newBasket = newBasket.map(item => item === foundItem ? { ...item, quantity: item.quantity + 1 } : item)
            } else
            {
                newBasket = [...newBasket, { ...payload.item, quantity: 1 }]
            }
            return { ...state, basket: newBasket }
        }
        case "REMOVE_FROM_BASKET":
            return { ...state, basket: [...state.basket].filter((item) => item.id !== payload.id) }

        case "SET_USER":
            return { ...state, user: payload.user }

        case "CHANGE_QUANTITY": {
            let newBasket = [...state.basket];

            const foundItem = newBasket.find(item => item.id === payload.id)
            if (payload.type === 'sub' && foundItem.quantity > 1)
            {
                foundItem.quantity--;
            } else if (payload.type === 'add' && foundItem.quantity < 999)
            {
                foundItem.quantity++;
            } else if (payload.quantity !== undefined)
            {
                foundItem.quantity = payload.quantity
            }
            return { ...state, basket: newBasket }
        }

        case "EMPTY_BASKET": {
            return { ...state, basket: [] }
        }
        default:
            return state;
    }
}

export default reducer;