import React from 'react'
import resume from '../../assets/resume.pdf'

const CTA = () => {

  return (
    <div className='cta' data-aos="fade-up">
      <a href={resume} className='btn' target='_blank' rel="noreferrer">
          Resumé
        <span className='running-light'></span>
        <span className='running-light'></span>
        <span className='running-light'></span>
        <span className='running-light'></span>
        </a>
      <a href="#contact" className='btn btn-primary'>
        Let's Talk
        </a>
    </div>
  )
}

export default CTA
