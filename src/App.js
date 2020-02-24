import React from 'react';
import './App.css';

import desktopImage from './img/bg-masthead.jpg';
import mobileImage from './img/bg-masthead.jpg';
import Navbar from './components/Navbar/Navbar.jsx';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';

function App() {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
    <div>
      <Navbar />
      <SideDrawer />
      <BackDrop />

      <main style={{marginTop: '0px'}}>
        <div className="App" style={{backgroundImage: `url(${imageUrl})`}}>
          <h1>Hello</h1>
        </div>
      </main>
      
    </div>
    
  );
}

export default App;

