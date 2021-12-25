import React from 'react';

const GoodsItem = (props) => {
    const { mainId, displayName, displayDescription, displayAssets, price } =
        props;
    return (
        <div className='card' id={mainId}>
            <div className='card-image'>
                <img src={displayAssets[0].full_background} alt={displayName} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className='card-action'>
                <button className='btn'>Buy it</button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    {price.finalPrice} rub.
                </span>
            </div>
        </div>
    );
};

export { GoodsItem };
