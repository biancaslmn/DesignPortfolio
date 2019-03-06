import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuIcon from '@material-ui/icons/Menu';

export default props => {
  return (
    <Menu customBurgerIcon={ <MenuIcon /> }>
    <a className="menu-item" href="/Portfolio">
        Portfolio
      </a>

      <a className="menu-item" href="#top">
        References
      </a>


      <a className="menu-item" href="#middle">
       Services
      </a>

      <a className="menu-item" href="#bottom">
        About
      </a>
      

      <a className="menu-item" href="/Contact">
        Contact
      </a>

    
    </Menu>
  );
};