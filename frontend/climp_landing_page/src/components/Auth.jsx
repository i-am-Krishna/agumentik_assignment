import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const [isSignup,setIsSignup] = useState(false)
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange=(e)=>{
  const {name,value} = e.target;
    setData((prev)=>({
      ...prev,
      [name] :value
    }))
  } 

  const sendRequest= async(type="login")=>{
    let res = axios.post(`https://agumentic-backend.vercel.app/api/auth/${type}`,{name:data.name,email:data.email,
   password:data.password}).catch((err)=>console.log(err));
   let newdata = await res;
   console.log(newdata)
   return newdata.data;
   }
   const handleSubmit=(e)=>{
    e.preventDefault();
    if(isSignup){
      sendRequest("register").then((data) => localStorage.setItem("userId",data.user._id)).then(()=>navigate("/admin")) 
    }
    else{
      sendRequest().then((data) => localStorage.setItem("userId",data.user._id)).then(()=>navigate("/admin")) 
    }
  
  }
   

// const handleSubmit=(e)=>{
//     e.preventDefault();
//  console.log(data)
// }


// console.log(data)


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display={'flex'} flexDirection='column' alignItems='center' justifyContent={'center'} boxShadow='8px 8px 18px #ccc' padding={3} margin='auto' mt={5} borderRadius={5} maxWidth={400}>
          <Typography p={3} variant="h3" textAlign="center"> {!isSignup ? "Login":"Signup"}</Typography>


        {isSignup &&  <TextField onChange={handleChange} name="name" value={data.name} type="text" placeholder='Name...' m="normal"/> }
          <TextField name="email" onChange={handleChange} value={data.email} type="email" placeholder='Email...' m="normal"/>
          <TextField name="password" onChange={handleChange} value={data.password} type="password" placeholder='Password...' m="normal"/>
<Button sx={{borderRadius:3, marginTop:3}} type="submit" variant="contained" btcolor='warning'>Submit</Button>
<Button sx={{borderRadius:3, marginTop:3}} onClick={()=>setIsSignup(!isSignup)} >Click here to {isSignup ? "Login":"Signup"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth;