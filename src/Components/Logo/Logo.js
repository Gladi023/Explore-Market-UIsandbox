import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import eM from './EM.png';

const Logo = () => {
    return (
        <div className='ma3 mt0'>
          <Tilt>
          <div style={{ height: '150px', width:'150px' }}>
          <img alt='logo' src={eM}/>
          </div>
          </Tilt>
        </div>
    );
}

export default Logo;