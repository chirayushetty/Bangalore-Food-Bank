import React from 'react'
import { Link } from "react-router-dom";
import { Payment} from './Payment'




export const Transaction = () => {
  return (
    <div className="container">
        <h1>Confirm Your Payment</h1>
        <div className="first-row">
            <div className="owner">
                <h3>Owner</h3>
                <div className="input-field">
                    <input type="text"/>
                </div>
            </div>
            <div className="cvv">
                <h3>CVV</h3>
                <div className="input-field">
                    <input type="password"/>
                </div>
            </div>
        </div>
        <div className="second-row">
            <div className="card-number">
                <h3>Card Number</h3>
                <div className="input-field">
                    <input type="text"/>
                </div>
            </div>
        </div>
        <div className="third-row">
            <h3>Card Number</h3>
            <div className="selection">
                <div className="date">
                    <select name="months" id="months">
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                      </select>
                      <select name="years" id="years">
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                      </select>
                </div>
                <div className="cards">
                    <img src="mc.png" alt=""/>
                    <img src="vi.png" alt=""/>
                    <img src="pp.png" alt=""/>
                </div>
            </div>    
        </div>
        {/* <a href="" style={{color:"brown"}}>Confirm</a> */}
    </div>
  )
}