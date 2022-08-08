import React from 'react'
import { Payment } from './Payment'
import { Link } from "react-router-dom";
import { Transaction } from './Transaction'
import { PastAchievements} from './PastAchievements'
// import './footer.css'


export const NGOFeeding = () => {
    const style = {
        padding: "60px",
    }
  return (
    <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
  </ol>
  <div class="carousel-inner" data-interval="1500" style={style}>
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-4u70uaphr0u0pts0lbk5t9j3n6-20170728010817.Medi.jpeg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/IMG-20210615-WA0012_1200x768.jpeg?taNZNsu4R5tMW9jLTnh0LzvRAEbyFqK4&size=770:433" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    <div style={style}>
        <h2>PROJECT ABSTRACT – NGO FEEDING PROGRAM</h2>
        <p>The NGOs have appeared as the savior of countless numbers of people without food, clothing, education and basic health facilities. While fighting for their key objectives, the organizations are also required to put a lot of effort to meet their day-to-day necessities like food, shelter and other needs which may force them to leave their main objectives aside. However, a collective action by various organizations can share this effort mutually to benefit each other as well as the community even more effectively. Understanding the situation, Bangalore Food Bank developed a sustainable solution, an NGO Feeding Program to serve the beneficiary organizations with a regular supply of essential groceries.</p>
    <h2>OUR OBJECTIVES ARE:</h2>
<p>
 <li>To serve the beneficiary organizations with a regular sustainable supply of sufficient groceries</li>
 <li>To provide the inmates with sufficient quantities of appropriate food to maintain their health and nutritional status</li>
 <li>To improve nutritional interventions by reinforcing the interaction between the various actors in the programme</li>
 <li>To enable the beneficiary organizations to stay more focused towards their vision and an increase in the quality of service</li>
 </p>
    <h2>PROGRAM PROCESS:</h2>
    <p>The program will supply essential groceries such as rice, pulses, oil, sugar, flours and snacks every month to the identified NGOs with residential programs or programs that provide food to the beneficiaries. The quantities to be distributed will be planned based on the number of inmates in the beneficiary organizations. We are currently backing 14 non-profit organizations benefiting 1690 inmates with their monthly groceries supplied to them every month. In view of the depth of the issue, we are willing to widen the program to more people in need and for that, we are looking for helping hands to support us.</p>
    </div>
    <p style={{textAlign: "center"}}>
    <a class="btn btn-lg" style={{fontSize: "24px",background:"orange",color:"white"}} href="#" role="button" >
      <Link to="/Payment" style={{color:"white"}}>Donate Now!</Link>
    </a>
    </p>
    <p style={{textAlign: "center"}}>
    <a class="btn btn-secondary btn-lg" style={{fontSize: "24px",background:"orange"}} href="#" role="button">
      <Link to="/PastAchievements" style={{color:"white"}}>Past Achievements</Link>
    </a>
    </p>
    </div>
  )
}
