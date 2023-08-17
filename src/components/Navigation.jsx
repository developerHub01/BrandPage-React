import React from "react";

import Button from './Button'

import './styles/NavigationStyles.css';

const Navigation = () => {
  return (
    <nav>
      <div className="">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <Button name="login" btnType="btn1"/>
    </nav>
  );
};

export default Navigation;
