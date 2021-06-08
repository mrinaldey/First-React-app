import React from 'react';
import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <header>
        <nav className={classes.Topbar}>
          <img src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png" alt="Amazon Logo" />
        </nav>
        </header>
    )
}

export default Topbar;