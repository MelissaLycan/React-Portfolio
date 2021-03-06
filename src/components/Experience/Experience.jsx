import React from 'react'
import "./experience.css"
import {BsPatchCheckFill } from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_content">
          <h3>Frontend Development</h3>
          <div classname="experience_frontend">
            <article className="experience_details">
              <BsPatchCheckFill className="experience-icon"  />
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience-icon"  />
              <div>
              <h4>React</h4>
              <small className="text-light">Junior</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience-icon"  />
              <div><h4>Javascript</h4>
              <small className="text-light">Junior</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience-icon"  />
              <div><h4>Bootstrap</h4>
              <small className="text-light">Junior</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience-icon"  />
              <div><h4>Tailwind</h4>
              <small className="text-light">Junior</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience-icon"  />
              <div><h4>HTML</h4>
              <small className="text-light">Experienced</small></div>
            </article>
          </div>
        </div>
        
        <div className="experience_content">
          <h3>Backend Development</h3>
           <div classname="experience_backend">
            <article className="experience_details">
              <BsPatchCheckFill className="experience-icon"  />
              <div><h4>MySQL</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience-icon"  />
              <div><h4>MongoDB</h4>
              <small className="text-light">Junior</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience-icon"  />
              <div><h4>Python</h4>
              <small className="text-light">Junior</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience-icon"  />
              <div><h4>AWS</h4>
              <small className="text-light">Junior</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience-icon"  />
              <div><h4>Tableau</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience-icon"  />
              <div><h4>API Handling</h4>
              <small className="text-light">Junior</small></div>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Experience