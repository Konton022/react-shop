import { createContext, useReducer } from 'react';
import { reducer } from './redicer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' });
    };
    value.removeFromBasket = (mainId) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: mainId } });
    };
    value.showBasket = () => {
        dispatch({ type: 'SHOW_BASKET' });
    };
    value.incrementAmount = (mainId) => {
        dispatch({ type: 'INCREMENT_AMOUNT', payload: { id: mainId } });
    };
    value.decrementAmount = (mainId) => {
        dispatch({ type: 'DECREMENT_AMOUNT', payload: { id: mainId } });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
