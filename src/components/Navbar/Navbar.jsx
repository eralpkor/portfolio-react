import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const Navbar = props => (

  <header className='navbar'>
    <nav className='navbar-navigation'>
      <div>
        <DrawerToggleButton click={props.DrawerToggleButton} />
      </div>
      <div className='navbar-logo'><Link to='/'><img src={require('../../img/favicon-32x32.png')} alt='my beautiful cat'></img></Link></div>
      <div className='spacer'></div>
      <div className='navbar-navigation-items'>
        
          <Link to='/'>About</Link>
          <Link to='projects'>Projects</Link>
          <Link to='contact'>Contact</Link>
          <a href='https://blog.eralpkor.com/'>Blog</a>
        
      </div>
    </nav>
  </header>
);
  

export default Navbar;