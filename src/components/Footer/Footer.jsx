import React from "react";
import image from "../../assets/images/Melissa-Lycan-logo.gif";
import './footer.css';

export function Footer() {
  const icons = [
    {
      name: "fab fa-github fa-10x",
      link: "https://github.com/MelissaLycan",
    },
    {
      name: "fab fa-linkedin fa-10x",
      link: "https://linkedin.com/in/nordicdaughter",
    },
  ];
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <footer className="flex-row px-1 justify-center">Footer
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}

      <a href="https://www.melissalycan.com">
        <img
          src={image}
          alt="logo made of geometric shapes that form a symbol from the letters of Melissa Lycan"
        ></img>
      </a>
    </footer>
  );
}

export default Footer