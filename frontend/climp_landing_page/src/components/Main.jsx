import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {image1} from './data'
import FifthS from './FifthS'
import Footer from './Footer'
import FourthS from './FourthS'
import'./main.css'
import SecondS from './SecondS'
import ThirdS from './ThirdS'

const Main = () => {
const [data,setData] = useState([])
const getRequest=async()=>{
  let res = await axios.get("https://agumentic-backend.vercel.app/api/admin")
  let newData = res.data;
  setData(newData)
}
useEffect(()=>{
  if(data.length === 0){
    getRequest()
  }
},[data])

 

  return (
    <>    <div className='main'>
      <div><h1 className='heading'>{data ? data?.firstHeading : "Big Data and Software Development"}</h1>
      <p className='paragraph'>{ data ? data?.firstPara : "Morbi sagittis neque, facilisis magna. Nullam egestes a pellentesque ultricies bibendum morbi nec acrean feugiat. Ut ipsum, interdum aliquam nisl lectus at"}</p>
      <div>
       <div className="search_input"> <input className='input' placeholder='Enter your email' type="text"/><button className="button-21" role="button">Get Started</button></div>
      </div>
      </div>
      <div className='image_section'>
        <img className='image1' src={data ? data?.firstImage : image1} alt="" />
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