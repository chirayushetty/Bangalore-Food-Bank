import React, { Fragment } from 'react';
import './App.css';
import Register from './components/layout/Register';
import Login from './components/layout/Login';
import Header from './components/layout/Header';
import Logout from './components/layout/Logout';
import FoodRescue from './components/layout/FoodRescue';
import FoodRelief from './components/layout/FoodRelief';
import Footer from './components/layout/Footer';
import Campaign from './components/layout/Campaign';
import Admin from './components/layout/Admin';
import CreatenewCampaign from './components/layout/CreatenewCampaign';

import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';

const  App=() =>(
  <Router>
    <Fragment>
   <Header />
   
   <Routes>
          <Route path="/" element ={
                
            <Campaign />
          } />
  
    <Route exact path="/Register" element={<Register/>} />
    <Route exact path="/Login" element={<Login/>} />
    <Route exact path="/Logout"  element={<Logout/>} />
    <Route exact path="/Admin" element={<Admin/>}/>
    <Route exact path='/createnewcampaign' element={<CreatenewCampaign/>}/>
    </Routes>
    <Footer/>
    </Fragment>
</Router>
  
 
);

export default App;
