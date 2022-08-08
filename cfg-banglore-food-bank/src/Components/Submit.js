import React from 'react'
import {CardGroup, Card} from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export const Submit = () => {
    const style = {
        padding: "60px",
    }
    const image ={
        height: "200px",
        width: "427.58px"
    }
  return (
    <div style={style}>
        <h2>Past Achievements</h2><br></br>
        <h4>Name :  Heifer International</h4>
        <h4>Program : NGO Feeding Program</h4>
        <h4>Amount : $$</h4>
        <h4>Images :</h4>
   <div class="card-group">
   <div class="card" >
    <img src="https://pbs.twimg.com/media/EB_L4EGXUAAq3sU.jpg" style={image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Distibuting Food</h5>
      <p class="card-text">To serve the beneficiary organizations with a regular sustainable supply of sufficient groceries</p>
      <p class="card-text"><small class="text-muted">Last updated 2 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://imgmedia.lbb.in/media/2019/11/5dca970153703c2f98a11c72_1573558017041.JPG" style={image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Serving Meals</h5>
      <p class="card-text">To improve nutritional interventions by reinforcing the interaction between the various actors in the programme</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://t3.ftcdn.net/jpg/02/92/07/56/360_F_292075696_hGdSBQ9Bvf1jsaVMP2rTpuRr0VMATck0.jpg" style={image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Distibuting Food</h5>
      <p class="card-text">The NGOs have appeared as the savior of countless numbers of people without food, clothing, education and basic health facilities. </p>
      <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
    </div>
  </div>
</div>
<br></br>
<h3>Funds Generated</h3>
<div>
<img src="http://smartkeeda.com/Myfiles/images/12-1.png" style={{height:"500px",width:"760px"}} class="card-img-top" alt="..."/>
</div>
    </div>
  )
}
