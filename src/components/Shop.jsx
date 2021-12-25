import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Cart } from './Cart';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    const addBasket = (item) => {
        let count = 1;

        console.log('shop', item);
        setOrder((prevState) => [...prevState, { item: item, count }]);
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
            <Cart quantity={order.length} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addBasket={addBasket} />
            )}
        </main>
    );
};

export { Shop };
