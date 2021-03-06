import React, { useContext } from 'react';
import { ShopContext } from '../context';
import BasketItem from './BasketItem';

const BasketList = () => {
    const { order = [], showBasket } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, item) => {
        return sum + item.price.regularPrice * item.amount;
    }, 0);

    return (
        <div className='basketList'>
            <ul className='collection'>
                <li className='collection-item active'>
                    Shop basket{' '}
                    <span className='secondary-content' onClick={showBasket}>
                        <i className='material-icons'>close</i>
                    </span>{' '}
                </li>
                {order.length ? (
                    order.map((item) => (
                        <BasketItem key={item.mainId} {...item} />
                    ))
                ) : (
                    <li className='collection-item'> the Basket is empty</li>
                )}
                <li className='collection-item active'>
                    Total cost
                    <span className='right'> {totalPrice} rub.</span>
                </li>
                <li className='collection-item'>
                    <div>
                        <button className='btn-small'>checkout</button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default BasketList;
