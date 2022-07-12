import React from "react";
import image from "../../assets/images/Melissa-Lycan-logo.gif";
import './footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <a className="center" href="https://www.melissalycan.com"><img src={image} alt=""/>
      </a>
      <h4>&#169; Copyright 2022 Melissa Lycan</h4>
    </footer>
  );
}

export default Footer