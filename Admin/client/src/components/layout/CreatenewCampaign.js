import React, { useState,Fragment } from 'react';
// import { Link } from 'react-router-dom';

const  Admincampaign=() =>{
    const[user, setUser]=useState({
        CampaignName:"",
        Details:"",
        startdate:"",
        Enddate:"",
        TotalAmount:""
    })
    let CampaignName,value;
    const handleInputs=(e)=>{
        CampaignName=e.target.name;
        value=e.target.value;
        setUser({...user,[CampaignName]:value});
        console.log(CampaignName,value);
    }

    const registerfun= async(e)=>{
        e.preventDefault();
        const{CampaignName,Details,startdate,Enddate,TotalAmount}=user;
        if(!CampaignName || !Details || !startdate || !Enddate || !TotalAmount){
            alert(`All details must be entered correctly!`)
          }
        else{
        
        const res= await fetch("http://localhost:5000/api/adminadd/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                CampaignName:CampaignName,Details:Details,startdate:startdate, Enddate:Enddate, TotalAmount:+TotalAmount
            })
        });
        const data=await res.json();
        console.log(data.status)
        window.alert("Registration successful");
    }

    }
   
    return (
        <section className="container">
        <h1 style={{color:"black"}} >Add New Campaign/Event</h1>
        <p className="lead">
          <i className="fas fa-user" /> 
        </p>
        <form className="form" method="post" >
          <div className="form-group">
            <h4>Campaign Name</h4>
            <input
              type="text"
              placeholder="Enter the Campaign Name"
              name="CampaignName"
              value={user.CampaignName}
              onChange={handleInputs}
              
            />
          </div>
          <div className="form-group">
          <h4>Description </h4>
            <input
              type="text"
              placeholder="Enter the Description"
              name="Details"
              value={user.Details}
              onChange={handleInputs}
            />
            
          </div>
          <div className="form-group">
          <h4>Start Date</h4>
            <input
              type="date"
              placeholder="Enter the startdate"
              name="startdate"
              value={user.startdate}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group">
          <h4>End Date</h4>
            <input
              type="date"
              placeholder="Enter the Enddate"
              name="Enddate"
              value={user.Enddate}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group">
          <h4>Total Amount</h4>
            <input
              type="number"
              placeholder="Enter the Total Amount"
              name="TotalAmount"
              value={user.TotalAmount}
              onChange={handleInputs}
            />
          </div>
          <input type="submit" onClick={registerfun} className="btn btn-primary" value="Submit" />
        </form>
      </section>
    )
}

export default Admincampaign;