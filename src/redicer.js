export function reducer(state, { type, payload }) {
    switch (type) {
        case 'ADD_TO_BASKET':
            const {} = payload;
            return {
                ...state,
                order: state.order.map(),
            };
        case 'INCREMENT_AMOUNT':
            return {
                ...state,
                order: state.order.map((item) => {
                    if (item.mainId === payload.id) {
                        return { ...item, amount: item.amount + 1 };
                    }
                    return item;
                }),
            };
        case 'DECREMENT_AMOUNT':
            return {
                ...state,
                order: state.order.map((item) => {
                    if (item.mainId === payload.id) {
                        if (item.amount <= 1) {
                            return { ...item, amount: 1 };
                        } else {
                            return { ...item, amount: item.amount - 1 };
                        }
                    }
                    return item;
                }),
            };
        case 'SHOW_BASKET':
            return { ...state, isBasketShow: (prevState) => !prevState };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((item) => item.mainId !== payload.id),
            };
        case 'CLOSE_ALERT':
            return { ...state, alertName: '' };
        default:
            return state;
    }
}
