import React from "react";
import "./projects.css"
import img1 from "../../assets/images/Melissa-Lycan-logo.gif";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.jpg";
import img8 from "../../assets/images/img8.jpg";

const data = [
  {
    id:1,
    image: img5,
    title: "CSS/Javascript NoteTaker",
    github: 'https://github.com/MelissaLycan/Note-Taker.git',
    demo: 'https://melissalycan.github.io/Note-Taker/'
  },
  {
    id:2,
    image: img2,
    title: "TimeTrackerApp (Javascript)",
    github: 'https://github.com/MelissaLycan/Challenge-05.git',
    demo: 'https://melissalycan.github.io/Challenge-05/'
  },
  {
    id:3,
    image: img3,
    title: "WeatherAPI (API's)",
    github: 'https://github.com/MelissaLycan/Challenge-06.git',
    demo: 'https://melissalycan.github.io/Challenge-06/'
  },
  {
    id:4,
    image: img4,
    title: "InventoryManagement (SQL)",
    github: 'https://github.com/MelissaLycan/Inventory-Management-App.git',
    demo: 'https://dry-caverns-71259.herokuapp.com'
  },
  {
    id:5,
    image: img6,
    title: "BlogApplication (Node.js)",
    github: 'https://github.com/MelissaLycan/Blog-Application.git',
    demo: 'https://murmuring-ravine-73825.herokuapp.com/'
  }, {
    id:6,
    image: img1,
    title: "Creative/Projects (Website)",
    github: 'https://github.com/MelissaLycan',
    demo: 'https://www.melissalycan.com'
  },
  {
    id:7,
    image: img7,
    title: "MERN Stack (FanTaskTik)",
    github: 'https://github.com/MelissaLycan/Fan-Task-Tic.git',
    demo: 'https://radiant-chamber-41757.herokuapp.com/'
  },
  {
    id:8,
    image: img8,
    title: "Front-End Html/CSS (FanApp)",
    github: 'https://github.com/MelissaLycan/Project-1.git',
    demo: 'https://melissalycan.github.io/Project-1/'
  }
  

]

export default function Projects() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <section id="projects">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container project_container">
        {
          data.map(({ id, image, title, github, demo })=> {
            return( <article key={id} className="project_item">
              <div className="container">
              <div className="project-title center"><h3>{title}</h3></div>
          <div className="project-image"><img src={image} alt={title}/></div>
          
          <div className="project_item-call">
          <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          </div>
          
        </article>
        )
          })
        }
      </div>
    </section>
  );
}
