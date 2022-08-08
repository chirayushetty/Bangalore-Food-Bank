import React, { useState,Fragment } from 'react';
import { Link } from 'react-router-dom';

const  Register=() =>{
    const[user, setUser]=useState({
        name:"",
        email:"",
        password:"",
        password2:""
       

        
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
        const{name,email,password,password2}=user;
        if (password !== password2) {
            window.alert('Passwords do not match');
          } 
        else{
        
        const res= await fetch("http://localhost:5000/api/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,email:email,password:password
            })
        });
        const data=await res.json();
        console.log(data.status)
        window.alert("Registration successful");
    }

    }
   
    return (
        <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form className="form" method="post" >
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={user.name}
              onChange={handleInputs}
              
            />
          </div>
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
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={user.password2}
              onChange={handleInputs}
            />
          </div>
          <input type="submit" onClick={registerfun} className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    )
}

export default Register;