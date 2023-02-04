import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { image2 } from './data';
import './third.css'

const ThirdS = () => {

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
    <div className='thirdS'>
        <div className='image_sec'>
            <img className='image2' src={data ? data?.thirdImage : image2} alt="" />
        </div>
        <div className='para_sec'>
          <h1 className='heading1'>{data ? data?.thirdHeading : "Automate your business. Deepen your human interactions."}</h1>
          <p className='paragraph'>{ data ? data?.thirdPara : "The Climp.co Platform can handle volumes of tedious, time-consuming phone calls with super-human accuracy and easy-to-track updates. Simply set the task and get back to the customer interactions that really matter."}</p>
          <div className='button_section'>
          <button className='button-21'>Get Started</button> <span >Request Demo</span></div>
        </div>
    </div>
  )
}

export default ThirdS;