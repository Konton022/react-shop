import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
    const { order = [], deleteOrderItem = Function.prototype } = props;

    return (
        <div className='basketList'>
            <ul className='collection with-header '>
                <li className='collection-item active'>Shop basket</li>
                {order.map((item) => (
                    <li className='collection-item' key={item.mainId}>
                        <BasketItem {...item} />{' '}
                        <span>
                            <i
                                class='material-icons'
                                onClick={() => deleteOrderItem(item.mainId)}
                            >
                                close
                            </i>
                        </span>
                    </li>
                ))}
                <li className='collection-item active'>Summary {} </li>
            </ul>
        </div>
    );
};

export default BasketList;
