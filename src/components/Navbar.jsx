import React, {useState} from 'react';
import Button from "./Button";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdClose} from "react-icons/md";
import "../styles/components/Navbar.scss"
import BrandName from './BrandName';

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar);
  }
  return (
    <div className =  {`navbar ${toggleNavbar === true ? "active" : ""}`}>
      <div className = "col" >
       <BrandName />
       <div className = "collapseble-button" >
         {!toggleNavbar ? <GiHamburgerMenu onClick = {navbarToggler} /> : <MdClose onClick = {navbarToggler} />}
       </div>
      </div>
      <nav>
       <div className = "links">
         <ul>
           <li>
             <a href = "#">About</a>
           </li>
           <li>
             <a href = "#">Services</a>
           </li>
           <li>
             <a href = "#">Testimonials</a>
           </li>
           <li>
             <a href = "#">Blog</a>
           </li>
           <Button content = "Contact" />
         </ul>
       </div>
      </nav>
    </div>
  )
}

export default Navbar
