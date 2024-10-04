import React from 'react'
import PropTypes from 'prop-types';
import "./Navbar2.css";
import logo from './component/tomodify/Hargunlogo.png';
import signIN from './component/tomodify/signIN.png';
import Cart from './component/tomodify/shopping-cart.png';
import Wishlist from './component/tomodify/wishlist.png';
export default function Navbar2(props) {
  return (
    
  <div className="navbar">
    <div className="navlogo">
        <img src={logo}  width="80px" height="80px" alt="" />
    </div>
    <div className="nav-heads">
      <a href="">Mens</a>
      <a href="">Womens</a>
      <a href="">Child</a>
      <a href="">New Release</a>
    </div>
    
    <div className="Searchbar">
    <nav className="navbar navbar-light bg-light navbar-outline-primary ">
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search for products and more" aria-label="Search"/>
  </form>
</nav>
</div>
    <div className="loginIcon">
      <img src={signIN} alt=""/>
      <a href="">Profile</a>
      <img src={Wishlist} alt=""/>
      <a href="">Wishlist</a>
      <img src={Cart} alt=""/>
      <a href="">Bag</a>
    </div>
  </div>
  
    

  )
}
