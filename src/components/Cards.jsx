import React from 'react';

const Cards = ({ title, url }) => {
    return (
        <div className='row'>
            <div className='col s12 m7'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={url} alt='hero' />
                        <span className='card-title'>{title}</span>
                    </div>
                    <div className='card-content'>
                        <p></p>
                    </div>
                    {/* <div className="card-action">
          <a href="#">This is a link</a>
        </div> */}
                </div>
            </div>
        </div>
    );
};

export { Cards };
