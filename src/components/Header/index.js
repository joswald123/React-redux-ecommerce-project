import React from 'react';
import './styles.scss';

import Logo from './../../assets/Logo_Empresas_Digitales3.png';

const Header = props => {
    return(
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="example logo" />
                </div>
            </div>
        </header>
    );
};

export default Header;