export function reducer(state, { type, payload }) {
    switch (type) {
        case 'ADD_TO_BASKET':
            const orderIndex = state.order.findIndex(
                (orderItem) => orderItem.mainId === payload.mainId
            );
            let newOrder = null;
            if (orderIndex < 0) {
                const newItem = { ...payload, amount: 1 };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === orderIndex) {
                        return { ...orderItem, amount: orderItem.amount + 1 };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName,
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
