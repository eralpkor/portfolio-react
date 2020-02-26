import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => {
  // console.log(props);
  let drawerClasses = "side-drawer";

  if (props.show) {drawerClasses = "side-drawer open"}

  return (
    <nav className={drawerClasses}>
      <div className='toolbar-navigation-items'>
        <Link to='/'>About</Link>
        <Link to='projects'>Projects</Link>
        <Link to='contact'>Contact</Link>
        <a href='https://blog.eralpkor.com/'>Blog</a>
      </div>
    </nav>
  )
  
};

export default sideDrawer;