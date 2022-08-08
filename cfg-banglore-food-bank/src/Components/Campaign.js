import React from 'react'
import './footer.css'
import { NGOFeeding } from './NGOFeeding'
import { BreakfastFeeding } from './BreakfastFeeding'
import { FoodRelief } from './FoodRelief'
import { FoodRescue } from './FoodRescue'
import { Payment } from './Payment'
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <section class="course">
      <div class="text-box">
        <h1>A GLOBAL FOODBANKING NETWORK PARTNER</h1>
        <p>Our vision is to Eradicate Hunger, Malnutrition & Prevent Food Wastage
          <br/>
          <br/>
          <br/>
          <h2><strong>CAMPAIGNS</strong></h2>
        </p>
      </div>
      {/* <h1>Campaigns</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam labore recusandae odio itaque q*/}

      <div class="row">
        <div class="course-col">
          {/* <h3>NGO Feeding Program</h3> */}
          <li>
            <Link to="/NGOFeeding" style={{ color: "black" }}><strong>NGO Feeding Program</strong></Link>
          </li>
          <br/>
          <br/>
          
          <a href="" class="hero-btn">
            <Link to="/Payment" style={{ color: "white" }}>DONATE</Link>
          </a>
        </div>

        <div class="course-col">
          {/* <h3>Breakfast Feeding Program for School Children</h3> */}
          <li>
            <Link to="/BreakfastFeeding" style={{ color: "black" }}><strong>Breakfast Feeding Program for School Children</strong></Link>
          </li>
          <br/>
          
          <a href="" class="hero-btn">DONATE</a>
        </div>

        <div class="course-col">
          {/* <h3>Food Rescue Program</h3> */}
          <li>
            <Link to="/FoodRescue" style={{ color: "black" }}><strong>Food Rescue Program</strong></Link>
          </li>
          <br/>
          <br/>
          <a href="" class="hero-btn">DONATE</a>
        </div>

        <div class="course-col">
          {/* <h3>Food Relief Program</h3> */}
          <li>
            <Link to="/FoodRelief" style={{ color: "black" }}><strong>Food Relief Program</strong></Link>
          </li>
          <br/>
          <br/>
          <a href="" class="hero-btn">DONATE</a>
        </div>

      </div>

    </section>
  )
}
