import React, { useEffect, useState } from 'react'

const Nav = () => {


  useEffect(() => {
    const element = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop <= 0) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
   
     return () => {
      window.addEventListener('scroll', () => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop <= 0) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
     }
   }, [])

  return (
<>
   <nav className="navbar">
     
     <ul className="navbar-nav ">
       <li className="nav-item">
         <a href="#" className="nav-link special-color">
          {/* <i className="fas fa-home"></i> */}
         <span className='black-color'>Home</span> </a>
       </li>
       <li className="nav-item">
         <a href="#" className="nav-link special-color">
          {/* <i className="fas fa-info-circle"></i>  */}
         <span className='black-color'>About</span></a>
       </li>
       <li className="nav-item">
         <a href="#" className="nav-link special-color">
          {/* <i className="fas fa-envelope"></i>  */}
         <span className='black-color'>Contact</span></a>
       </li>
     </ul>
   </nav>
   </>
  )
}

export default Nav