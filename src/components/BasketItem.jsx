import React from 'react';

const BasketItem = (props) => {
    const {
        displayName,
        amount,
        price,
        mainId,
        deleteOrderItem,
        changeOrderAmount,
    } = props;

    return (
        <li className='collection-item'>
            <div>
                {displayName} X
                <button
                    className='btn change-amount-btn'
                    onClick={() =>
                        changeOrderAmount({ mainId, type: 'remove' })
                    }
                >
                    <i className='material-icons'>remove</i>
                </button>
                {amount}
                <button
                    className='btn change-amount-btn'
                    onClick={() => changeOrderAmount({ mainId, type: 'add' })}
                >
                    <i className='material-icons'>add</i>
                </button>
                it. = {price.regularPrice * amount} rub.
                <span className='secondary-content'>
                    <i
                        className='material-icons'
                        onClick={() => deleteOrderItem(mainId)}
                    >
                        close
                    </i>
                </span>
            </div>
        </li>
    );
};

export default BasketItem;
