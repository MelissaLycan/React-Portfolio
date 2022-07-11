import React from "react";
import Call from './Call'
import ME from '../../assets/images/MelissaLycan.jpg'
import Socials from './Socials'
import './header.css'

export function Header() {
  return (
    <header id="home">
      <div className="container bg-dark w-100 in-line d-flex flex-row px-1 justify-space-around">
      <h5 id="center" className="">Hello I'm</h5>
      <h1 id="center">Melissa Lycan</h1>
      <h5 id="center"className="text-light">Full Stack Developer</h5>
      <Call />

      <div className= "center">
        <img className="me" src={ ME } alt="Melissa Lycan"/>
      </div>
      <Socials />
      <a href="#projects" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header