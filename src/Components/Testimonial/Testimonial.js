import React, { useState } from "react";
import "./Testimonial.css";
import Zoom from "react-reveal/Zoom";
import ceo from "../../Image/mKongovi.png";
import linkedIn from "../../Image/linkedin.png";

const Testimonial = () => {
  const data = [
    {
      name: "Madhu Kongovi",
      position: "CEO of Navigem Data Inc.",
      linkedIn: "https://www.linkedin.com/in/madhu-kongovi-8796352/",
      des:
      "\"I had the opportunity to see Shashank work and evolve as a fresh engineering graduate. In all the roles he took on, he made significant contributions. \n As an application developer, iOS mobile division, he made valuable contributions. Also, as a part of our NavLabs Internship program, he played an instrumental role in the process of up-skilling undergraduate senior students from our partnered colleges in areas of software development and machine learning. What sets him apart is his patience to understand the problem and his perseverance to identify an acceptable solution irrespective of the complexity of the procedure; something rare in today’s times. He is a quick learner and works very hard to ensure timely delivery; he is values driven. His commitment to work and ability to think critically stands out. \nHe is an employers’ delight and would be an asset wherever he works.\"",
    },
    // Add more testimonial objects as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const colors = ["#8181F7", "#4b81f4", "#0088FE", /* Add more colors */];

  const currentItem = data[currentIndex];

  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section-title">
        <p className="main-topic">Recommendations 🤝:</p>
      </div>

      <div className="testimonial-slider">
        <div className="content-slider-main">
          <Zoom>
            <div className="content-slider" style={{ backgroundColor: colors[currentIndex] }}>
              <img src={ceo} alt="testimonil imgae" className="center-image" />
              <div className="name-container">
                <p style={{ fontWeight: "bold", marginTop: "15px" }}>{currentItem.name}</p>
                <a href={currentItem.linkedIn} target="_blank">
                  <img src={linkedIn} style={{ width: "20px", height: "20px" }} alt="LinkedIn" />
                </a>
              </div>
              <p>{currentItem.position}</p>
              <p>{currentItem.des}</p>
            </div>
          </Zoom>
        </div>
        {data.length > 1 ? 
          <div className="carousel-controls">
          <button onClick={handlePrev}>&#8249; Prev</button>
          <button onClick={handleNext}>Next &#8250;</button>
        </div>
        : null}
        
      </div>
    </div>
  );
};

export default Testimonial;



