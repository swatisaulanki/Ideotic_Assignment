import React, { useContext } from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import styles from "./Login.module.css"
import {Link, useNavigate} from 'react-router-dom'
import { Contextsfetch } from '../Components/Contexts'

const Login = () => {
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const {login}=useContext(Contextsfetch)
  const navigate=useNavigate()
  const handleSubmit= (e)=>{
    e.preventDefault();
if(email==="swati@gmail.com" && pass==="12345"){
  alert("login successfull")
  login()
}
else{
  alert("login failed")
  }
}
  return (
    <div>
    <Navbar/>
    <div>
        <form className={styles.logins} onSubmit={handleSubmit}>
        <h3 >Sign In</h3>
        <p style={{marginLeft:"-30%"}}>Email</p>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email"/>
        <p>Password</p>
        <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Enter your password"/>
        <br/>
        <br/><br/>
           <button  className={styles.btn}>Submit</button>
        </form>
    </div>
      
    </div>
  )
}

export default Login
