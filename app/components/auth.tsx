'use client'
import { useState } from "react"
import { authentication } from "../firebase-config"
import {createUserWithEmailAndPassword} from 'firebase/auth'

const auth = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
     
    const signIn=async () =>{
      try{await createUserWithEmailAndPassword(authentication,email,password)
     setEmail('')
     setPassword('')}
     catch(error){
        console.log(error);
        
     }
    }
  return (
    <div className='flex items-center justify-center h-screen'>  
        <div className='grid bg-slate-600   p-8 '>
    <input className='bg-slate-300 w-64 mb-4' type="email" placeholder='email...' required onChange={e =>setEmail(e.target.value)}/>
    <input className='bg-slate-300 w-64 mb-4' type="password" placeholder='password...' required onChange={e =>setPassword(e.target.value)}/>
    <button className='bg-green-500' onClick={signIn}>sign in</button>
    
         </div></div>
  
  )
}

export default auth