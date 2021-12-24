import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Cards } from './Cards';

const Shop = () => {
    const [items, setItems] = useState([]);
    console.log(API_KEY, API_URL);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { Authorization: API_KEY },
        };
        fetch(API_URL, requestOptions)
            .then((resp) => resp.json())
            .then((data) => {
                setItems(data.shop);
                console.log(data.shop);
            });
    }, []);
    return (
        <main className='container content'>
            {items.map((item) => (
                <Cards
                    key={item.mainId}
                    title={item.displayName}
                    url={item.displayAssets[0].full_background}
                />
            ))}
        </main>
    );
};

export { Shop };
