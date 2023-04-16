import './assests/styles/app.css'
import './assests/styles/buttons.css';
import './assests/styles/media_query.css';
import Nav from './Components/Nav'
import Main from './Components/Main'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Products from './Components/Products/Products'
import { useEffect,useState } from 'react'
function App() {
  
  const [showElement, setShowElement] = useState(false);
  // const element = document.querySelector('.nav');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navElement = document.querySelector('.nav');
  //     const { top } = navElement.getBoundingClientRect();
  //     if (top <= 0) {
  //     // if (window.scrollY > 50000) {
  //       setShowElement(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


 

  return (
  <>
  <div id="container">


  <section className="header width-100 sticky-50">
    <Header />  
  

  <section className="flex width-100 justify-end ">
    <Nav />     
  </section>  
 
  <section className=""> 
    <a href="#" className="btn-purple">Login</a>   
  </section>  
 
  <section className=""> 
    <a href="#" className="btn-green">Checkout</a>   
  </section>  

  </section>  

  <section className="nav text-center width-100" >
    {/* {showElement? <Nav />: null } */}
  </section>
  <section className="main">
    <Products />  
  </section> 
  
  <section className="footer width-100 box-shadow margin-top-4">
    <Footer /> 
  </section>
  </div>
  </>
  );
}

export default App;
