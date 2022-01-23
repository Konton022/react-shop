import React, { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
    const { order, showBasket } = useContext(ShopContext);
    return (
        <div className='cart blue darken-3 white-text' onClick={showBasket}>
            <i className='material-icons'>shopping_cart</i>
            {order.length ? (
                <span className='cart-quantity'>{order.length}</span>
            ) : null}
        </div>
    );
}

export { Cart };
