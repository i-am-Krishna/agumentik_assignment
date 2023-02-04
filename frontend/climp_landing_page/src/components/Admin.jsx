import { Button, FormLabel, TextField, Typography} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './admin.css'

const Admin = () => {
  const navigate = useNavigate();
  const [data,setData] = useState({
    firstHeading:'',
    firstPara:'',
    firstImage:'',
    secondHeading:'',
    secondPara:'',
    thirdImage:'',
    thirdHeading:'',
    thirdPara:'',
    fourthHeading:'',
    fourthImage:'',
    fourthPara:'',
    fifthHeading1:'',
    fifthImage:'',
    fifthHeading2:'',
    fifthPara:'',
    facebook:'',
    linkedin:'',
    instagram:'',
    twitter:''
  })


  const handleChange=(e)=>{
    const {name,value} = e.target;
    setData({
      ...data,
      [name]:value
    })
  }
  const handleSubmit= (e)=>{
    e.preventDefault();
    axios.post('https://agumentic-backend.vercel.app/api/admin',data).then((res)=>alert("Successfully Saved")).then((res)=>navigate("/"))

  }


  return (
    <div className='admin'>

        <Box display={'flex'} flexDirection='column' alignItems='center' justifyContent={'center'} boxShadow='8px 8px 18px #ccc' padding={3} margin='auto' mt={5} borderRadius={5} maxWidth={400}>
          <Typography p={3} variant="h3" textAlign="center">Admin Page</Typography>

        <form className='form_data' onSubmit={handleSubmit} >
            <div>
            <label>Heading 1 </label>
            <TextField type="text" onChange={handleChange} placeholder='Big Data and Software...' value={data.firstHeading} name='firstHeading'/></div>

            <div>
            <label>First Paragraph</label>
            <TextField type="text" onChange={handleChange} placeholder='Morbi sagittis neque...' value={data.firstPara} name='firstPara'/></div>
            <div>
            <label>Image 1</label>
            <TextField type="text" onChange={handleChange} placeholder='first image...' value={data.firstImage} name='firstImage'/></div>
            <div>
            <label>Heading 2 </label>
            <TextField type="text" onChange={handleChange} placeholder='Second Heading...' value={data.secondHeading} name='secondHeading'/></div>
            <div>
            <label>Second Paragraph</label>
            <TextField type="text" onChange={handleChange} placeholder='Second Para...' value={data.secondPara} name='secondPara'/></div>
            <div>
            <label>Third Heading</label>
            <TextField type="text" onChange={handleChange} placeholder='Third Heading...' value={data.thirdHeading} name='thirdHeading'/></div>
            <div>
            <label>Third Image</label>
            <TextField type="text" onChange={handleChange} placeholder='Third Image...' value={data.thirdImage} name='thirdImage'/></div>
            <div>
            <label>Third Paragraph</label>
            <TextField type="text" onChange={handleChange} placeholder='Third Para...' value={data.thirdPara} name='thirdPara'/></div>
            <div>
            <label>Fourth Heading</label>
            <TextField type="text" onChange={handleChange} placeholder='Fourth heading...' value={data.fourthHeading} name='fourthHeading'/></div>
            <div>
            <label>Fourth Image</label>
            <TextField type="text" onChange={handleChange} placeholder='Fourth Image...' value={data.fourthImage} name='fourthImage'/></div>
            <div>
            <label>Fourth Paragraph</label>
            <TextField type="text" onChange={handleChange} placeholder='Fourth Para...' value={data.fourthPara} name='fourthPara'/></div>
            <div>
            <label>Fifth Heading 1</label>
            <TextField type="text" onChange={handleChange} placeholder='Fifth Heading 1...' value={data.fifthHeading1} name='fifthHeading1'/></div>
            <div>
            <label>Fifth Image</label>
            <TextField type="text" onChange={handleChange} placeholder='Fifth Image...' value={data.fifthImage} name='fifthImage'/></div>
            <div>
            <label>Fifth Heading 2</label>
            <TextField type="text" onChange={handleChange} placeholder='Fifth Heading 2...' value={data.fifthHeading2} name='fifthHeading2'/></div>
            <div>
            <label>Fifth Paragraph</label>
            <TextField type="text" onChange={handleChange} placeholder='Fifth Para...' value={data.fifthPara} name='fifthPara'/></div>
            <div>
            <label>Linked In</label>
            <TextField type="text" onChange={handleChange} placeholder='Linked In...' value={data.linkedin} name='linkedin'/></div>
            <div>
            <label>Facebook</label>
            <TextField type="text" placeholder='Facebook...' onChange={handleChange} value={data.facebook} name='facebook'/></div>
            <div>
            <label>Instagram</label>
            <TextField type="text" onChange={handleChange} placeholder='Instagram...' value={data.instagram} name='instagram'/></div>
            <div>
            <label>Twitter</label>
            <TextField type="text" onChange={handleChange} placeholder='Twitter...' value={data.twitter} name='twitter'/></div>
          
          <Button type="submit"  variant="contained" btcolor='warning'>Submit</Button>
        </form>
          </Box>
    </div>
  )
}

export default Admin