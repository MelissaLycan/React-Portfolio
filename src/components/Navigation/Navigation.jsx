import React from "react";
import "./navigation.css";
import {AiOutlineHome} from 'react-icons/ai'
import {AiTwotoneMail} from 'react-icons/ai'
import { GrProjects, GrResume } from 'react-icons/gr'
import {GiSkills} from 'react-icons/gi'
import {MdOutlineReviews} from 'react-icons/md'
import { useState } from 'react'

export const NavTabs = () =>{
  const [activeNavTabs, setActiveNavTabs] = useState('#')
  return (
    <nav className="">
      <a href="#home" onClick={()=> setActiveNavTabs('#home')} className={activeNavTabs === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNavTabs('#about')} className ={activeNavTabs === '#about' ? 'active' : ''}><GrResume/></a>
      <a href="#experience" onClick={()=> setActiveNavTabs('#experience')} className ={activeNavTabs === '#experience' ? 'active' : ''}><GiSkills/></a>
      <a href="#projects" onClick={()=> setActiveNavTabs('#projects')} className ={activeNavTabs === '#projects' ? 'active' : ''}><GrProjects/></a>
      <a href="#testimonials" onClick={()=> setActiveNavTabs('#testimonials')} className ={activeNavTabs === '#testimonials' ? 'active' : ''}><MdOutlineReviews/></a>
      <a href="#contact"onClick={()=> setActiveNavTabs('#contact')} className ={activeNavTabs === '#contact' ? 'active' : ''}><AiTwotoneMail/></a>
    </nav>
    )
  }
  export default NavTabs



//   const handlePageChange = (page) => setCurrentPage(page);
//   return (
//     <ul className="nav nav-tabs flex-row">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => handlePageChange("Home")}
//           className={currentPage === "Home" ? "nav-link active" : "nav-link"}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange("About")}
//           className={currentPage === "About" ? "nav-link active" : "nav-link"}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#resume"
//           onClick={() => handlePageChange("Resume")}
//           className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
//         >
//           Blog
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange("Contact")}
//           className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// }
