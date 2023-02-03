import React from 'react'
import { image3 } from './data'
import './fourth.css'

const FourthS = () => {
  return (
   
        <div className='fourth_section1'>
            
        <div className='fourth_para_sec'>
          <h1 className='heading1_f'>See impactful results with an easy integration.</h1>
          <p className='paragraph_f'>The Climp.co Platform can handle volumes of tedious, time-consuming phone calls with super-human accuracy and easy-to-track updates. Simply set the task and get back to the customer interactions that really matter.</p>
          <div className='button_section'>
          <button className='button-21'>Get Started</button> <span style={{color:"#00efe3"}} >Request Demo</span></div>
        </div>
        <div className='fourth_section2_p'>
            <img className='image_section' src={image3} alt="image3" />
        </div>
        </div>

     
  )
}

export default FourthS