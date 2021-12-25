import React from 'react';
import { GoodsItem } from './GoodsItem';

const GoodsList = (props) => {
    const { goods = [], addBasket } = props;
    console.log('list', props);

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }
    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodsItem key={item.mainId} {...item} addBasket={addBasket} />
            ))}
        </div>
    );
};

export { GoodsList };
