import React, { useEffect } from 'react';

const Alert = (props) => {
    const { name = '', setAlertName } = props;

    useEffect(() => {
        const timerId = setTimeout(() => setAlertName(''), 3000);
        return () => {
            clearTimeout(timerId);
        };
    }, [name]);

    return (
        <div id='toast-container'>
            <div className='toast'>{name} is added to basket</div>
        </div>
    );
};

export { Alert };
