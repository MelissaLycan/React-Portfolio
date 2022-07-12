import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className='socials'>
        <a href="https://linkedin.com/in/nordicdaughter" target="blank"><i><FaLinkedin size={70}/></i></a>
        <a href="https://github.com/MelissaLycan" target="blank"><i><FaGithub size={70}/></i></a>
        <a href="https://www.facebook.com/melissalycan" target="blank"><i><FaFacebook size={70}/></i></a>
        <a href='https://www.instagram.com/melissamlycan' target="blank"><i><FaInstagram size={70}/></i></a></div>
  )
}

export default Socials