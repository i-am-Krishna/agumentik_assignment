import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
  return (
    <>    <div className='header'> 
    <Link style={{paddingBottom:"40px"}} className='links' to={'/'}>   <div><span className='box1'>dd</span><span style={{textDecoration:"none"}}>Climp.co</span></div></Link>
 
    <div className='header_links'>
        <div><Link className='links' to='/bussiness'>Bussiness</Link></div>
        <div><Link className='links' to='/works'>How it Works</Link></div>
        <div><Link className='links' to='/about'>About Us</Link></div>
        <div><Link className='links' to='/pricing'>Pricing</Link></div>
        <div><button className="button-21" role="button">Get Started</button></div>
        <div><Link style={{textDecoration:"none"}} to={'/admin'}><button className="button-21" role="button">Admin</button></Link></div>
    </div>
    </div>
   
    </>

  )
}

export default Header