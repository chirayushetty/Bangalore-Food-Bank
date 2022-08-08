import React from 'react'
import './footer.css'
import {Submit} from './Submit'
import { Link } from "react-router-dom";
export const PastAchievements = () => {
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
    Program:
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
    Amount:
    <input type="text" name="name" />
  </label>
  <br></br>
  <br></br>
  <label>
    Images:
  </label><input type="file" />
  <br></br>
  <br></br>
  <label>
    Description:
    <input type="text" name="name" />
  </label>
  <br></br>
  <br></br>
  {/* <input style={{textAlign:"center"}} type="submit" value="Submi*/}
  <a class="btn btn-secondary btn-lg" style={{fontSize: "20px",background:"orange"}} href="#" role="button">
      <Link to="/Submit" style={{color:"white"}}>Submit</Link>
  </a>
</form>
    </div>
  )
}
