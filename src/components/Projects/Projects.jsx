import React from "react";
import "./projects.css"
import img1 from "../../assets/images/linkedjazz2.jpg";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";

const data = [
  {
    id:1,
    image: img5,
    github: 'https://github.com/MelissaLycan/Note-Taker.git',
    demo: 'https://melissalycan.github.io/Note-Taker/'
  },
  {
    id:2,
    image: img2,
    github: 'https://github.com/MelissaLycan/Challenge-05.git',
    demo: 'https://melissalycan.github.io/Challenge-05/'
  },
  {
    id:3,
    image: img3,
    github: 'https://github.com/MelissaLycan/Challenge-06.git',
    demo: 'https://melissalycan.github.io/Challenge-06/'
  },
  {
    id:4,
    image: img4,
    github: 'https://github.com/MelissaLycan/Inventory-Management-App.git',
    demo: 'https://dry-caverns-71259.herokuapp.com'
  },
  {
    id:5,
    image: img1,
    github: 'https://github.com/MelissaLycan',
    demo: 'https://www.melissalycan.com'
  },
  {
    id:6,
    image: img6,
    github: 'https://github.com/MelissaLycan/Blog-Application.git',
    demo: 'https://murmuring-ravine-73825.herokuapp.com/'
  }
  
  

]

export default function Projects() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <section id="projects">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo })=> {
            return( <article key={id} className="project_item">
          <div className="project-image"><img src={image} alt={title}/></div>
          <h3>{title}</h3>
          <div className="project_item-call">
          <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        )
          })
        }
      </div>
    </section>
  );
}
