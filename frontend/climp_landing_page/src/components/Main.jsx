import React from 'react'
import {image1} from './data'
import FifthS from './FifthS'
import Footer from './Footer'
import FourthS from './FourthS'
import'./main.css'
import SecondS from './SecondS'
import ThirdS from './ThirdS'
const Main = () => {
  return (
    <>    <div className='main'>
      <div><h1 className='heading'>Big Data and Software Development</h1>
      <p className='paragraph'>Morbi sagittis neque, facilisis magna. Nullam egestes a pellentesque ultricies bibendum morbi nec acrean feugiat. Ut ipsum, interdum aliquam nisl lectus at</p>
      <div>
       <div className="search_input"> <input className='input' placeholder='Enter your email' type="text"/><button className="button-21" role="button">Get Started</button></div>
      </div>
      </div>
      <div className='image_section'>
        <img className='image1' src={image1} alt="" />
      </div>
    </div>
    <SecondS/>
    <ThirdS/>
    <FourthS/>
    <FifthS/>
    <Footer/>
    </>

  )
}

export default Main