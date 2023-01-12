import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import styles from './Homepage.module.css'
import { useEffect } from 'react'
const Homepage = () => {
    const [data,setData]=useState([])
    const GetData=()=>{
        axios.get("https://dog.ceo/api/breeds/list/all")
        .then((res)=>{
            console.log(res.data.message)
            setData(res.data.message)
        })
    }
    useEffect(()=>{
        GetData()
    },[])
let breeddocs=Object.keys(data)

  return (
    <>
      <Navbar/>

<div className={styles.contain}>
    {
        breeddocs.length>0 && breeddocs.map((items)=>{
            return(
                <div style={{border:"1px solid black",width:"80%", marginTop:"20px", height:"50vh",boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}}>
                  <h2>{items}</h2>
                  <img   style={{height:"29vh", }} src='https://images.dog.ceo/breeds/setter-english/n02100735_4057.jpg'/>
                </div>
            )
        })
    }
</div>
    </>
  )
}

export default Homepage
