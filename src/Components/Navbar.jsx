import React, { useContext } from 'react'
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom'
import { Contextsfetch } from './Contexts';
const Navbar = () => {
  const  {isAuth}=useContext(Contextsfetch)
  return (
    <>
    <div className={styles.Maincontain}>
      <div className={styles.navbar}>
      
      <div>
        <Link to="/">List All Breeds</Link>
      </div>

      <div className={styles.register}>
         <Link to="/register">
         <button className={styles.btn1}>Register</button></Link>
         </div>
         <div className={styles.sign}>
         <Link to="/login">
         <button className={styles.btn2}>{isAuth ? "logout" :"login"}</button></Link>
         </div>
        
      </div>
      </div>
    </>
  )
}

export default Navbar
