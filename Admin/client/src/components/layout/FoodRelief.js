import React from 'react'

const FoodRelief = () => {
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
        <h2>PROJECT ABSTRACT – FOOD RELIEF PROGRAM</h2>
        <p>Natural disasters such as floods, earthquakes, and pandemics are unavoidable or an uncontrollable part of human life and usually to an extent cannot be predicted or controlled. Also, they often affect the food supply chain in the area by various means resulting in food insecurity for the victims. Hence a distribution program for emergency food is a vital part of any disaster relief response. Being a voice for food security, Bangalore Food Bank considers it our prime responsibility to ensure that the sufferers are meeting their nutritional needs. Our Food Relief program is expected to address the food crises during such situations.</p>
        <p>Our experience in food relief work during Kerala and Karnataka floods in 2018 and 2019 helped us to implement a well-organized food relief effort during the COVID 19 pandemic with 92 tons of food materials such as groceries, freshly cooked meals, instant food mixes, health drinks, confectionary and beverages. Thanks to all those who supported us with aid in kind and cash. With that, we were able to make more than 6 lakh feeds touching over 40 thousand needy people across Bangalore till date.</p>
    <h2>OUR OBJECTIVES ARE:</h2>
<p>
 <li>To ensure food security to the victims</li>
 <li>To bridge the gap in the food supply chain</li>
 <li>To provide the sufferers with sufficient quantities of appropriate food to maintain their health and nutritional status</li>
 <li>o improve nutritional interventions by reinforcing the interaction between the various actors in the programme</li>
 </p>
    <h2>HOW WE DO IT:</h2>
    <p>The program will supply food materials to the identified victims based on their need and the situation on ground in the form of freshly cooked hot meals, nutritious instant food mixes or health drinks that can be consumed freshly or prepared easily with boiling water or as ration kits with essential groceries that will cater to the food requirement of a family for 10 to 15 days. The distributions are always implemented along with other organizations and government agencies working in the areas to avoid duplication.</p>
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

export default FoodRelief;
