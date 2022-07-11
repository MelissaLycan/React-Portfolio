import React from "react";
import './about.css';
import ME from "../../assets/images/Melissa-Lycan-logo.jpg";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


export function About() {
  return (
    <section id='about'>
      <div className="center">
        <h5>Get to Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about-image">
            <img src={ME} alt="Melissa Lycan in a dark dress"/>
          </div>
          
        </div>
      
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>20+ Years Working</small>
            </article>

             <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>100+ Creative Projects</small>
            </article>

             <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>Coding and Tech</small>
            </article>
            </div>
            <div>
              <p>
              I have worked most of my life in the private sector in Sales and
              Management. After repeated success my passions took me into the music
              business. Over a decade in music and a Bachelor of Science in Music
              Business and I began to see trends everywhere. This sparked a passion
              inside me for BigDATA and I raced to attain a Masters in BI, where I
              discovered my love for math, strategy and logic all over again. Over the
              last 5 years I have taught HS Math in Denver. Currently I am honing my
              development skills and finishing certification in Full Stack Development
              so that I may build my own concepts and contribute to the greater
              accomplishments of mankind with my skills and talents.  
            </p>
            <a id='talkBtn' href="#contact" className="btn center btn-primary">Let's Talk</a>
            </div>
            </div>
          </div>
    </section>
  );
}

export default About