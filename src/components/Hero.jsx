import React from 'react'
import Button from './Button';

import './styles/HeroStyles.css';

const Hero = () => {
  return (
    <main className='hero'>
        <div className="container">
            <div className='hero-content'>
                <h1>YOUR FEET <br/>DESERVE <br/>THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <Button name="Shop Now" btnType="btn1"/>
                    <Button name="Category" btnType="btn2"/>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className='brand-icons'>
                        <img src="./images/flipkart.png" alt="" />
                        <img src="./images/amazon.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='hero-image'>
                <img src="./images/shoe_image.png" alt="" />
            </div>
        </div>
    </main>
  )
}

export default Hero
