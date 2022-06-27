import React from 'react'
import classes from './Topbar.module.css'
const Topbar = ()=>{
    return(
        <header>
        <nav className={classes.Topbar}>
          <img src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png" alt="Amazon Logo " />
        </nav>
        </header>
    );
}
export default Topbar;