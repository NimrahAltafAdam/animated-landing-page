import React from 'react';
import WorkImage from "../assets/work.svg";
import Button from "../components/Button";
import {GoPlay} from "react-icons/go";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import  "../styles/sections/Starter.scss";

function Starter() {
  return (
    <div className = "main_container">
    <div className = "container">
    <div className = "content">

   
      <h1>
        We provide Solutions to Help You to Build or Grow Your Business!
      </h1>
      <p>
        A professional web and mobile app development agency with over
         100+ web and app developed. We provide a high-quality 
         service in web and mobile app development as well as in design.
      </p>
      <div className = "button-container">
      <Button content = "Watch video" icon = {<GoPlay />}/>
      <Button content = "Request Quote" 
      icon = {<HiOutlineArrowNarrowRight />} 
      color = "pink"/>
      </div>
      </div>
      <div className = "image">
      <img src = {WorkImage} alt = "Work Image" />
      </div>
    </div>
      
    </div>
  )
}

export default Starter
