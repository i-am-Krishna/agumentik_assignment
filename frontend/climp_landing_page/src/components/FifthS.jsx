import React from 'react'
import { image1, image5 ,image6,image7} from './data'
import './fifthS.css'

const FifthS = () => {
  return (
    <div className='section_f'>

        <div className='first_part'><h1 className='heading_f'>Our Latest Blog Posts</h1>
        <div>
        <img className='image_five' src={image1} alt="" />
        </div>
        <div className='section_para'>
            <h2 className='heading_2'>AI Benefit Verification in General Availability and Series A Funding</h2>
            
          <p className='paragraph_data'>The Climp.co Platform can handle volumes of tedious, time-consuming phone calls with super-human accuracy and easy-to-track updates. Simply set the task and get back to the customer interactions that really matter.</p>
        </div>
    </div>
    <div className='second_part'>
    <div>
        <img className='image_on_second'  src={image5} alt="" />
        <div className='paragraph_data2'>
        <h4>Data labeling tools in the conversatinal AI world should be built</h4>
        <p>Today, my co-founder Shyam Rajagopalan and I are introducing the world to Infinitus, a voice robotic</p>
        </div>
    </div>
    <div>
        <img  className='image_on_second' src={image6} alt="" />
        <div className='paragraph_data2'>
        <h4>Data labeling tools in the conversatinal AI world should be built</h4>
        <p>Today, my co-founder Shyam Rajagopalan and I are introducing the world to Infinitus, a voice robotic</p>
        </div>
    </div>
    <div>
        <img className='image_on_second'  src={image7} alt="" />
        <div className='paragraph_data2'>
        <h4>Data labeling tools in the conversatinal AI world should be built</h4>
        <p>Today, my co-founder Shyam Rajagopalan and I are introducing the world to Infinitus, a voice robotic</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default FifthS