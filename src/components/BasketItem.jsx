import React from 'react';

const BasketItem = (props) => {
    const { displayName, amount, price, mainId, deleteOrderItem } = props;

    return (
        <li className='collection-item'>
            <div>
                {displayName} X {amount} it. = {price.regularPrice * amount}{' '}
                rub.
                <i
                    className='material-icons right'
                    onClick={() => deleteOrderItem(mainId)}
                >
                    close
                </i>
            </div>
        </li>
    );
};

export default BasketItem;
