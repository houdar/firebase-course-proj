'use client'
import { useState } from "react"
import { authentication ,googleAuth} from "../firebase-config"
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'

const auth = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
   console.log(authentication?.currentUser?.email);
   
    const signIn=async () =>{
      try{await createUserWithEmailAndPassword(authentication,email,password)
     setEmail('')
     setPassword('')}
     catch(error){
        console.log(error);
        
     }
    }
    const googleSignIn = async()=>{
        try{await signInWithPopup(authentication,googleAuth)
            setEmail('')
            setPassword('')}
            catch(error){
               console.log(error);
               
            }
    
    }
    const logOut = async()=>{
        try{await signOut(authentication)
            setEmail('')
            setPassword('')}
            catch(error){
               console.log(error);
               
            }
    
    }
  return (
    <div className='flex items-center justify-center h-screen'>  
        <div className='grid bg-slate-500   p-8 '>
    <input className='bg-slate-300 w-64 mb-4' type="email" placeholder='email...' required onChange={e =>setEmail(e.target.value)}/>
    <input className='bg-slate-300 w-64 mb-4' type="password" placeholder='password...' required onChange={e =>setPassword(e.target.value)}/>
    <button className='bg-green-500 mb-4' onClick={signIn}>sign in</button>
    <button className="bg-red-400 mb-4"  onClick={logOut}>log out</button>
    <button className='bg-non text-sm text-blue-800 ' onClick={googleSignIn}>sign in with google ?</button>
    
    
         </div></div>
  
  )
}

export default auth