import React from 'react';
import Nav from './Nav';
import logo1 from "../assests/pics/logo1.png";
import logo2 from "../assests/pics/logo2.png";
import logo3 from "../assests/pics/logo3.png";
import logo4 from "../assests/pics/logo4.png";
import logo5 from "../assests/pics/logo5.png";
import logo6 from "../assests/pics/logo6.png";
import logo7 from "../assests/pics/logo7.png";
import logo8 from "../assests/pics/logo8.png";
import logo9 from "../assests/pics/logo9.png";
import logo10 from "../assests/pics/logo10.png";

const Header = () => {
  return (
    <div className=''>
    <div>
      {/* <a href="#" className="navbar-brand special-color flex"> */}
      {/* <i className="fas fa-store"></i> */}
      <img alt='circle-logo' src={logo1} className='logo'></img>
      {/* <span className='color'>     E-WebStore </span></a> */}
      </div>
    {/* <img alt='circle-logo' src={arrow} className='circle-green'></img> */}
     
    {/* <h1><Nav /></h1>  */}
    </div>
  )
}

export default Header