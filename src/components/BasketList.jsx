import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
    const { order = [], deleteOrderItem = Function.prototype } = props;

    return (
        <div className='basketList'>
            <ul className='collection'>
                <li className='collection-item active'>Shop basket</li>
                {order.length ? (
                    order.map((item) => (
                        <BasketItem
                            key={item.mainId}
                            {...item}
                            deleteOrderItem={deleteOrderItem}
                        />
                    ))
                ) : (
                    <li className='collection-item'> the Basket is empty</li>
                )}
                <li className='collection-item active'>Summary {} </li>
            </ul>
        </div>
    );
};

export default BasketList;
