import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo2.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  
const [toggleMenu, setToggleMenu] = useState(false);


  const handleNavbar = () => setToggleMenu(!toggleMenu);
  return (
    <nav className='navbar' id = "navbar">           {/*links to other documents or parts within the document.  */}
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-8 fs-24 ls-2'>CutmBooks</span>   {/*"className is a special attribute in React used to assign CSS classes to an element. */}
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>  {/*handleNavbar function could perform various actions related to the navbar, such as opening/closing a dropdown menu, updating state to show/hide certain elements, fetching data, or navigating to a different part of the application. */}
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "/book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar