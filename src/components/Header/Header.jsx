import React from "react";
import image from "../../assets/images/Melissa-Lycan-logo.gif";
import NavTabs from "../Navigation/Navigation";

export function Header() {
  return (
    <header className="container bg-dark w-100 in-line flex-row px-1 justify-space-around">
      <a href="https://www.melissalycan.com">
        <img
          src={image}
          alt="logo made of geometric shapes that form a symbol from the letters of Melissa Lycan"
        ></img>
      </a>
      <h1>Melissa Lycan</h1>
      < NavTabs />
    </header>
  );
}

export default Header