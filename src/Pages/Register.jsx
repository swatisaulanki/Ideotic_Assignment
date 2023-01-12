import React from 'react'
import Navbar from '../Components/Navbar';
import styles from './Register.module.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';

const Register = () => {
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const [firstname,setFirstname]=useState("")
   const [lastname, setLastname]=useState(" ")
  const handleRegistersubmit= (e)=>{
    e.preventDefault();
    alert("registration  Successful!")

    console.log(email);
  }
  return (
    <div>
    <Navbar/>
    <div>
<form className={styles.register} onChange={handleRegistersubmit}>
  <div>
  <div>
  <h2>Register</h2>
  </div>
  <p>First Name</p>
  <input type="text" placeholder='Enter your first name' />
  <p>Last Name</p>
  <input type="text" placeholder='Enter your last name'/>
  <p style={{marginLeft:"-33%"}}>Email</p>
  <input  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email'/>
  <p>Password</p>
  <input type="text" placeholder='Enter your password'/>

  <br/>
  <br/>
  <br/>
  <button className={styles.btns}>Create account</button>

     </div>
</form>
    </div>
    </div>
  )
}

export default Register
