import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
const Navbar = () => {
  const {cartItems }= useCart()
  return ( 
    <>
     <div className="navSection">
      <Link to='/' className="custom-link">
    <div className="title">
        <h2 >E-Mart</h2>

  </div>
  </Link>
  <div className="search">
    <input type="text" placeholder="Search..." />
  </div>
  <div className="user">
    <div className="user-detail">SignIN/SignUp</div>
    <Link to= '/cart'>
    <div className="cart">Cart
      <span>
            {cartItems.length}
          </span>
    </div>
    </Link>
    
  </div>
  </div>
  <div className="subMenu">
    <ul>
      <Link to="/mobiles" className="custom-link">
      <li>Mobiles</li>
      </Link>
      <Link to="/computers" className="custom-link">
      <li>Computers</li>
      </Link>
      <Link to="/watch" className="custom-link">
      <li>Watches</li>
      </Link>
      <Link to="/Men" className="custom-link">
      <li>Men Fashion</li>
      </Link>
      <Link to="/Woman" className="custom-link">
      <li>Women Dressing</li>
      </Link>
      <Link to="/Ac" className="custom-link">
      <li>AC</li>
      </Link>
       <Link to="/Fridge" className="custom-link">
      <li>Fridge</li>
      </Link>
      <Link to="/kitchen" className="custom-link">
      <li>KitchenItems</li>
      </Link>
        <Link to="/Furniture" className="custom-link">
      <li>Furniture</li>
      </Link>
      

      
      
    </ul>
  </div>
    
    </>
 
  )
}
export default Navbar