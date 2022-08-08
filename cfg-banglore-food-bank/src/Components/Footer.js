import React from 'react'
import './footer.css'

const style = {
    backgroundColor: "#262f36",
    borderTop: "1px solid #E7E7E7",
    textAlign: "left",
    color:"orange",
    padding: "2em",
    position: "relative",
    top:'90vh',
    left: "0",
    bottom: "0vh",
    height: "60px",
    width: "100%",
    color:"white",
    height:"100%",
    paddingTop:"3%",
    marginBottom: "0%"
  };

export default function Footer() {
  return (
    <div>
      <div style={style}>
      <section id="intro" className="container-fluid">
		<div className="row">
			<div className="col-md-4">
				<h2 className="title">Quick Links</h2>
                <hr></hr>
				<ul>
                    <li>Home</li>
                    <li>Our Team</li>
                    <li>Gallery</li>
                    <li>Partners</li>
                    <li>Get Involved</li>
                </ul>
			</div>
            <div className="col-md-4">
				<h2 className="title">Programs</h2>
                <hr></hr>
                <ul>
                    <li>NGO Feeding Program</li>
                    <li>Breakfast Feeding Program for School Children</li>
                    <li>Food Rescue program</li>
                    <li>Food Relief Program</li>
                </ul>
			</div>
			<div className="col-md-4">
				<h2 className="title">Contact Us</h2>
                <hr></hr>
                    <p><i className="bi bi-map"></i>  Site No. 3 &amp; 4, KHB Colony, Airport By-Pass Road, Yelahanka, Bangalore – 560064, India</p>
                    <p><i className={"bi bi-phone"}/>  +91 9538035252</p>
                    <p><i className={"bi bi-envelope"}/>  info@bangalorefoodbank.com</p>
			</div>
		</div>
	</section>

      </div>
    </div>
  )
}
