import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";


const  Login=() =>{
    const navigate = useNavigate();
    const[user, setUser]=useState({
        email:"",
        password:""
        
    })
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
        console.log(e);
    }


    const registerfun= async(e)=>{
        e.preventDefault();
        const{email,password}=user;
        if(email=='admin' && password=='admin')
        {
            navigate('/Admin');

        }
        else{
        const res= await fetch("/api/auth",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,password:password
            })
        });

        const data =await res.json();
        console.log(data.token)
        console.log(data);
        if(res.status==400){
            window.alert("Invalid credentials");
        }
        else if (res.status==500){
            window.alert("Server Server");
        }
        else{
        
            localStorage.setItem('token', data.token);
            window.alert("Login successful");
          
           
            
            navigate('/User');
    }
    }
}
    return (
        <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user" /> Sign Into Your Account
        </p>
        <form className="form" method="post" >
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={user.email}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password 1"
              name="password"
              value={user.password}
              minLength="6"
              onChange={handleInputs}
            />
          </div>
          <input type="submit"  onClick={registerfun} className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    );
  
    }
    

export default Login;