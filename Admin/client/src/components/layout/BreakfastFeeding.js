import React from 'react'

export const BreakfastFeeding = () => {
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
      <img className="d-block w-100" src="http://bangalorefoodbank.com/images/gallery/School-breakfast-feeding-program/2.jpg" alt="Second slide"/>
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
        <h2>PROJECT ABSTRACT – BREAKFAST FEEDING PROGRAM FOR SCHOOL CHILDREN</h2>
        <p>Research suggests that a well-nourished child who starts the day with breakfast is more likely to be at school, be a better learner, and be willing to participate in the classroom. Unfortunately, many families face obstacles in providing a healthy morning meal each day. Tight budgets for low-income families and busy morning schedules may force many students to arrive hungry at school. It may affect one’s academics, brain function, and overall wellness. Our School Breakfast Program will play a critical role in filling this void for many low-income children every school day. The program currently supports 496 students at 2 schools in Bangalore serving 1,19,040 hot breakfasts annually.</p>
    <h2>OUR OBJECTIVES ARE:</h2>
<p>
 <li>Alleviates the health and developmental consequences of childhood malnutrition</li>
 <li>Higher school attendance & lower dropout rates</li>
 <li>Improved concentration and energy levels in students</li>
 <li>Relief to parents & guardians</li>
 </p>
    <h2>HOW WE DO IT:</h2>
    <p>Our school feeding program will serve freshly cooked hot nutritious breakfast for all the students on a regular basis at their schools. Bangalore food bank will develop the diet plan with different items considering the local food culture and preference. The menu includes Masala Upma, Kichadi, Masala Poha, Kesari Bath, Masala Oats and Vermicelli Upma etc… on a rotational basis.</p>
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
