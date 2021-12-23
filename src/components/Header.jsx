import React from 'react';

const Header = () => {
    return (
        <nav className='light-blue darken-3'>
            <div className='nav-wrapper'>
                <a
                    href='https://savelev-konst.site'
                    className='brand-logo left'
                >
                    React Shop
                </a>
                <ul id='nav-mobile' className='right'>
                    <li>
                        <a href='https://github.com/Konton022'>Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export { Header };
