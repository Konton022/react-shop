import React from 'react';

const BasketItem = (props) => {
    console.log('item props', props);
    const { displayName, amount, price } = props;

    return (
        <div>
            {displayName} {price.regularPrice}rub. {amount}
        </div>
    );
};

export default BasketItem;
