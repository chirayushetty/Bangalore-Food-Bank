import React, { Fragment, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const  Logout=() =>{

    useEffect(()=>{
        console.log("Use Effect Function");
        logoutfun();
    },[])


    const[Aboutuser, setAboutUser]=useState();
  
    const logoutfun= ()=>{
        localStorage.removeItem("token");
       
    }


    return (
       <div className='container'>
        <h1> Successfully Logged Out</h1>
        </div>
    )
}

export default Logout;
