import './App.css';
import logo from './assets/Hargunlogo.png'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Login from  './pages/Login'
import Cart from './pages/Cart'
import Order from './pages/Order'
import PlaceOrder from './pages/PlaceOrder'
import PropTypes from 'prop-types'
import Footer from './assets/component/Footer';
import NavBar from './assets/component/NavBar';


const App=(props)=> {
  return (
    <> 
     <div className='px-2 py-2 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
    {/* <NavBar title='E-Commerce ' /> */}
  <NavBar title ='E-Commece'/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/collection' element={<Collection/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/product/:productId' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/place-order' element={<PlaceOrder/>}/>
    <Route path='/Order' element={<Order/>}/>
    </Routes>
    <Footer/>
    </div>
    </>
    
  );
}

export default App;
