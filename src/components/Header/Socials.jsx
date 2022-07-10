import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export const Socials = () => {
  return (
    <div className='socials'>
        <a size='5x' href="https://linkedin.com/in/nordicdaughter" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/MelissaLycan" target="blank"><BsGithub/></a>
        <a href="https://www.facebook.com/melissalycan" target="blank"><BsFacebook/></a>
        <a href='https://www.instagram.com/melissamlycan' target="blank"><BsInstagram/></a></div>
  )
}

export default Socials