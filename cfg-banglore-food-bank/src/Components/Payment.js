import React, { Component } from 'react'
import './footer.css'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Transaction } from './Transaction'
import { NGOFeeding } from './NGOFeeding'
import { Campaign } from './Campaign'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// function navigate(){
//   alert("Before")
//   navigate("http://3000/Transaction")
//   alert("AFter")
// }



export const Payment = () => {
  return (
    <div className='comment-box'>
    <form>
  <label>
    Name of the organization:
     <input type="text" name="name" />
  </label>
  <br></br>
  <br></br>
  <label>
    Campaign Name:
  </label>
  <select>
  <option value="NGO Feeding">NGO Feeding</option>
  <option value="Breakfast Feeding">Breakfast Feeding Program for School Children</option>
  <option value="Food Relief">Food Relief</option>
  <option value="Food Rescue">Food Rescue</option>
</select>
<br></br>
<br></br>
  <label>
    Date:
    <input type="date" name="name" />
  </label>
  <br></br>
  <br></br>
  <label>
    Email:
    <input type="email"/>
  </label>
  <br></br>
  <br></br>
  <label>
    Contact Number:
    <input type="tel" name="name" />
  </label>
  <br></br>
  <br></br>
  <label>
    Amount:
    <input type="number"/> 
  </label>
  <br></br>
  <br></br>
  <Transaction/>
  <button>
  <NavLink activeClassName="is-active" to="">Transaction</NavLink>
    {/* Transaction */}
     {/* <Routes> <Route element={<Transaction/>} /></Routes>  */}
      {/* <Router><Route exact path="/Transaction" component={Transaction}/></Router> */}
  </button>
  {/* <Link to="/Payment">Donate Now!</Link>
  <input style={{textAlign:"center"}} type="submit" value="Payment" /> */}
</form>
    </div>
  )
}

// class="btn btn-secondary btn-lg"
// style={{textAlign:"center"}} href="#" role="button"