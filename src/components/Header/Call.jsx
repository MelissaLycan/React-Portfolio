import React from 'react'
import Resume from '../../assets/images/LycanResume.pdf'

export const Call = () => {
  return (
    <div className='call d-flex flex-row justify-content-center'>
        <a href={Resume} download="Melissa_Lycan_Resume.pdf" className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>  
    </div>
  )
}

export default Call
