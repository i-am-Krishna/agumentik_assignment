import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './seconds.css'

const SecondS = () => {

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
    <div className='secondS'>       
     <div className='section1'>
      <div><h1>{data ? data?.secondHeading : "What is Climp?"}</h1>
      <p>{data ? data?.secondPara : "This week, we're excited to be featuring Conal Sathi. Conal has been building the computer brains that drive the conversations that the infinitus digital assistant has. From rule based systems to self-learing models, Conal has been pulling out all stops to make sure our customers are getting the most out of thier Infinitus experience."}</p>
      <br />
      <p>Julian is a two time enterpreneur and thrives in early-stage companies that are figuring things out. He has also previously worked at Google and YouTube where he led the redesign.</p>

      <button className='button-21'>View Details</button>
      </div>
    </div>
    <div  className='section2'>
      <div className='part1'>
        <h3>Get your time energy back</h3>
        <p>No need to frantically set up short term call-centers during unexpected spikes, or sit on unused capacity only pay fir the calls you need.</p>
      </div>
      <div className='part2'>
       <h3>Skip the worry whike staying informed</h3>
       <p>Infinitus' HIPAA complaint platform helps you gain better oversight of where everything stands so you never have to wonder.</p>
      </div>

      
    </div>

    </div>

  )
}

export default SecondS