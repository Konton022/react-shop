import React, { useContext } from 'react';
import { ShopContext } from '../context';

const BasketItem = (props) => {
    const { displayName, amount, price, mainId } = props;
    const { decrementAmount, incrementAmount, removeFromBasket } =
        useContext(ShopContext);

    return (
        <li className='collection-item'>
            <div>
                {displayName}
                <button
                    className='btn change-amount-btn'
                    onClick={() => decrementAmount(mainId)}
                >
                    <i className='material-icons'>remove</i>
                </button>
                x{amount}
                <button
                    className='btn change-amount-btn'
                    onClick={() => incrementAmount(mainId)}
                >
                    <i className='material-icons'>add</i>
                </button>
                it. = {price.regularPrice * amount} rub.
                <span className='secondary-content'>
                    <i
                        className='material-icons'
                        onClick={() => removeFromBasket(mainId)}
                    >
                        close
                    </i>
                </span>
            </div>
        </li>
    );
};

export default BasketItem;
