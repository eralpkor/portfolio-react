import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => (
  <nav className='side-drawer'>
    <div className='toolbar-navigation-items'>
      <Link to='/about'>About</Link>
      <Link to='projects'>Projects</Link>
      <Link to='contact'>Contact</Link>
      <a href='https://blog.eralpkor.com/'>Blog</a>
    </div>
  </nav>
);

export default sideDrawer;