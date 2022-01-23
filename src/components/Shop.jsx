import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import { API_KEY, API_URL } from '../config';
import { Alert } from './Alert';
import BasketList from './BasketList';
import { Cart } from './Cart';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';

const Shop = () => {
    const { loading, setGoods, isBasketShow, alertName } =
        useContext(ShopContext);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { Authorization: API_KEY },
        };
        fetch(API_URL, requestOptions)
            .then((resp) => resp.json())
            .then((data) => {
                setGoods(data.shop);
            });
        // eslint-disable-next-line
    }, []);
    return (
        <main className='container content'>
            <Cart />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow ? <BasketList /> : null}
            {alertName && <Alert />}
        </main>
    );
};

export { Shop };
