import React from 'react';
import Nav from './Nav';
import arrow from "../assests/pics/arrow2.jpg";
import logo from "../assests/pics/commerce.png";

const Header = () => {
  return (
    <div className=''>
    <div><a href="#" className="navbar-brand special-color flex">
      {/* <i className="fas fa-store"></i> */}
      <img alt='circle-logo' src={logo} className='logo'></img>
      <span className='color'>
      E-WebStore </span></a></div>
    <img alt='circle-logo' src={arrow} className='circle-green'></img>
     
    {/* <h1><Nav /></h1>  */}
    </div>
  )
}

export default Header