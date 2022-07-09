import React from "react";

export default function Projects() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>Hello students!</h1>
      <p>Today we will be learning about the following:</p>
      <ul className="parent">
        <section className="box">
          <div className="title">
            <h1 id="Work">Work</h1>
          </div>
          <div className="box-main">
            <div className="titlebox">
              <h3>Big Data</h3>
            </div>
          </div>
          <div className="boxes">
            <div className="box-1 card">
              <div className="titlebox">
                <h3>Java Script/React/CSS</h3>
              </div>
            </div>
            <div className="box-2 card">
              <div className="titlebox">
                <h3>
                  <a href="https://dry-caverns-71259.herokuapp.com">
                    Inventory Management App
                  </a>
                </h3>
              </div>
            </div>
            <div className="box-3 card">
              <div className="titlebox">
                <h3>
                  <a href="https://melissalycan.github.io/Project-1/">
                    Music Industry Fan App
                  </a>
                </h3>
              </div>
            </div>
            <div className="box-4 card">
              <div className="titlebox">
                <h3>Mern Stack</h3>
              </div>
            </div>
          </div>
        </section>
        <li>Music API</li>
        <li>Weather API</li>
        <li>Inventory</li>
        <li>Time Tracker</li>
        <li>Text Editor</li>
        <li>Note Taker</li>
      </ul>
    </div>
  );
}
