import './assests/styles/app.css'
import './assests/styles/buttons.css';
import './assests/styles/media_query.css';
import './assests/styles/cardstyles.css';
import './assests/styles/signup.css';
import Nav from './Components/Nav'
import Main from './Components/Main'
import Header from './Components/Header'
import Footer from './Components/Footer'
import SignUp from './Components/utils/SignUp'
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

  function openModal() {
    const modal = document.querySelector('.login-modal')
    modal.style.display = "table";
  }
 
  return (
  <>
  <div id="container">
    {/* <div className='flex' >

<SignUp />

    </div> */}

  <section className="header width-100 sticky-50">
    <Header />  
  <section className="flex width-100 justify-end ">
    <Nav /> 
   
    </section>  
 
  <section className=""> 
    <a href="#" className="btn-purple handle-login" onClick={openModal}>Login</a>   
  </section>  
  <section className=""> 
    <a href="#" className="btn-green">Checkout</a>   
  </section> 
  </section>  

  
  {/* <BannerCard />
    <BannerCard /> */}   
 
  <section className="nav text-center  " > 
  <SignUp />
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
