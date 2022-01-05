import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import BasketList from './BasketList';
import { Cart } from './Cart';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const addBasket = (item) => {
        const orderIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        );
        if (orderIndex < 0) {
            const newItem = { ...item, amount: 1 };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === orderIndex) {
                    return { ...orderItem, amount: orderItem.amount + 1 };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
    };

    const handleBasketShow = () => setBasketShow((prevState) => !prevState);

    const deleteOrderItem = (id) => {
        console.log('delete item id:', id);
        setOrder(order.filter((item) => item.mainId !== id));
    };

    const changeOrderAmount = ({ mainId, type }) => {
        const newOrder = order.map((item) => {
            if (item.mainId === mainId) {
                switch (type) {
                    case 'remove':
                        if (item.amount <= 1) {
                            return item;
                        } else {
                            return { ...item, amount: item.amount - 1 };
                        }
                    case 'add':
                        return { ...item, amount: item.amount + 1 };

                    default:
                        return item;
                }
            }
            return item;
        });
        console.log('newOrder', newOrder);
        setOrder(newOrder);
    };

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { Authorization: API_KEY },
        };
        fetch(API_URL, requestOptions)
            .then((resp) => resp.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            });
    }, []);
    return (
        <main className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addBasket={addBasket} />
            )}
            {isBasketShow ? (
                <BasketList
                    order={order}
                    deleteOrderItem={deleteOrderItem}
                    handleBasketShow={handleBasketShow}
                    changeOrderAmount={changeOrderAmount}
                />
            ) : null}
        </main>
    );
};

export { Shop };
