import React from 'react'
import {Link} from 'react-router-dom';
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_top'> 
        <Link style={{paddingBottom:"40px"}} className='links' to={'/'}>   <div><span className='box1'>dd</span><span style={{color:"white"}}>Climp.co</span></div></Link>
        <h2 style={{color:"white"}}>Subscribe to our newslater</h2>
       <div className="search_input"> <input className='input' placeholder='Enter your email' type="text"/><button className="button-21 button22" role="button">Get Started</button></div>
        </div>
<div className='lower_section'>
    <div>
    <p   className='paragraph_data pd'>The Climp.co Platform can handle volumes of tedious, time-consuming phone calls with super-human accuracy and easy-to-track updates. Simply set the task and get back to the customer interactions that really matter.</p>
        
    </div>
    <div>
        <ul>
            <li>SOFTWARE</li>
            <li>HARDWARE</li>
            <li>COMPANY</li>
            <li>PROGRAMS</li>
        </ul>
    </div>
    <div>
        <ul>
            <li>ABOUT US</li>
            <li>HOW IT WORKS</li>
            <li>CONTACT</li>
            <li>BLOG</li>
        </ul></div>
    <div>
        <ul>
           <Link to={'#'} style={{textDecoration:"none"}}> <li>TWITTER</li></Link>
           <Link to={'#'} style={{textDecoration:"none"}}>  <li>FACEBOOK</li></Link>
           <Link to={'#'} style={{textDecoration:"none"}}>
            <li>INSTAGRAM</li></Link>
            <Link to={'#'} style={{textDecoration:"none"}}>
            <li>LINKEDIN</li></Link>
        </ul></div>
    <div>
        <h4 style={{color:"white"}}>OUR OFFICE</h4>
        <p>Mars Colony Complex, Sol-air 290 345 Av</p>
    </div>
</div>
<p>All Right Reserved 2021 - Climp.co</p>
    </div>
  )
}

export default Footer