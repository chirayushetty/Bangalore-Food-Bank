import React from 'react'

  const FoodRescue = () => {
   const style = {
       padding: "60px",
   }
  return (
    <div>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
  </ol>
  <div className="carousel-inner" data-interval="1500" style={style}>
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-4u70uaphr0u0pts0lbk5t9j3n6-20170728010817.Medi.jpeg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/IMG-20210615-WA0012_1200x768.jpeg?taNZNsu4R5tMW9jLTnh0LzvRAEbyFqK4&size=770:433" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

    <div style={style}>
        <h2>PROJECT ABSTRACT – FOOD RESCUE PROGRAM</h2>
        <p>In the 2020 Global Hunger Index, India ranks 94th out of the 107 countries with sufficient data to calculate 2020 GHI scores. With a score of 27.2, India has a level of hunger that is serious. According to FAO estimates in ‘The State of Food Security and Nutrition in the World, 2020 report,189.2 million people are undernourished in Indiai,e, 14% of our population. The report also says, 51.4% of women in reproductive age between 15 to 49 years are anaemic.Further according to the report 34.7% of the children aged under five in India are stunted (too short for their age), while 20% suffer from wasting, meaning their weight is too low for their height.</p>
        <p>At the same time, India is one of the top most countries that wastes large quantities of food every day. According to the FAO estimates, nearly 40% of the food produced in India is lost or wasted. Food loss and waste have significant negative impact on the food-security, economic and environmental conditions.</p>
<p>Our Food Rescue Program facilitates a sustainable operation which creates a supportive environment that can procure food materials close to its expiry or best before date and make these available to those in need through a network of local community owned agencies (NGOs). The program saves an average of 2 to 3 tons of surplus food materials from being wasted every month.</p>
    <h2>OUR OBJECTIVES ARE:</h2>
<p>
 <li>To prevent food wastage</li>
 <li>To procure the surplus food and distribute the same to the needy</li>
 <li>To eradicate hunger and malnutrition</li>
 <li>Create and promote nation wide awareness</li>
 </p>
    <h2>HOW WE DO THIS:</h2>
    <p>The program will identify potential sources of surplus food like food manufacturers, retailers, suppliers, restaurants and other major stake holders of the food supply chain. The next step is to make them aware of the Food Rescue Program where they can send the food materials that are nearing the expiry date but unfortunately can’t make it to the destination or consumers. On confirmation, the food will be collected by Bangalore Food Bank and assessed for its safety to consume. In the final stage, the foods will be distributed to the needy people through various community organizations that have grass root level connections with the society.</p>
    </div>
    <p style={{textAlign: "center"}}>
    <a className="btn btn-secondary btn-lg" style={{fontSize: "24px"}} href="#" role="button">Donate Now!</a>
    </p>
    <p style={{textAlign: "center"}}>
    <a className="btn btn-secondary btn-lg" style={{fontSize: "24px"}} href="#" role="button">View Past Achievements</a>
    </p>
    </div>
  )
}
export default FoodRescue;