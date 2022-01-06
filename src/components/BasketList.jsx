import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
    const {
        order = [],
        deleteOrderItem = Function.prototype,
        handleBasketShow,
        changeOrderAmount,
    } = props;

    const totalPrice = order.reduce((sum, item) => {
        return sum + item.price.regularPrice * item.amount;
    }, 0);

    return (
        <div className='basketList'>
            <ul className='collection'>
                <li className='collection-item active'>
                    Shop basket{' '}
                    <span
                        className='secondary-content'
                        onClick={handleBasketShow}
                    >
                        <i className='material-icons'>close</i>
                    </span>{' '}
                </li>
                {order.length ? (
                    order.map((item) => (
                        <BasketItem
                            key={item.mainId}
                            {...item}
                            deleteOrderItem={deleteOrderItem}
                            changeOrderAmount={changeOrderAmount}
                        />
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
