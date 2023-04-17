import './assests/styles/app.css'
import './assests/styles/buttons.css';
import './assests/styles/media_query.css';
import Nav from './Components/Nav'
import Main from './Components/Main'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Products from './Components/Products/Products'
import { useEffect,useState } from 'react'
import Aos from 'aos';
function App() {  
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    Aos.init({
      duration : 2000
    });
  }, []);
 
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

  <section className="nav text-center width-100 " >
    {/* {showElement? <Nav />: null } */}
   
    {/* <span data-aos="zoom-out-down"  className="padding-4" style={{
    width: "200px",
    height: "250px",
    background: "purple",gap:"10px" }}>
</span> */}


 
 
{/* <span  className="padding-4" data-aos="zoom-out-down" style={{
    width: "200px",
    height: "250px",
    background: "purple" }}>
</span> */}
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
