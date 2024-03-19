import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

import bmsce from "../../Image/BMSCE.png";
import northeastern from "../../Image/Northeastern.png";

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
    {
      name: "Northeastern University",
      degree: "Master's in Data Science",
      year: "Sep 2022 - May 2024",
      location: "📍: Boston, MA",
      gpa: "GPA: 3.81/4.00",
      coursework: ["Introduction to Data Management (DS 5110)", "Algorithms (CS 5800)", "Database Management Systems (CS 5200)", "Supervised Machine Learning (DS 5220)", "Web Development (CS 5610)", "Unsupervised Machine Learning (DS 5230)", "Cloud Computing (CS 6620)",],
    },
    {
      name: "BMS College of Engineering",
      degree: "Bachelor's in Electronics Engineering",
      year: "Aug 2014 - May 2018",
      location: "📍: Bangalore, India",
      gpa: "GPA: 3.50/4.00",
      coursework: ["C Programming", "Operating Systems", "Data Structures & Algorithms", "Microcontrollers", "Computer Networks"],
    },
  ];


  const images = [
    northeastern,
    bmsce
  ]

  return (
    <div className="container education-section" id="education">

      <div className="section-title">
        <p className="main-topic">Education 🎓:</p>
      </div>


      <div className="timeline-section">

      <VerticalTimeline lineColor="#4b81f4">

          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#252526", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #252526" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: "#252526", color: "#fff" }}
              icon={<FaGraduationCap />}
            >
            
              <div id="college">
              <img
                    src={images[index]}
                    alt={item.name}
                    style={{ width: "30px", height: "30px", objectFit: "cover" }}
                  />
                <h3 className="vertical-timeline-element-title">
                    {item.name}
                </h3>     
              </div>


              <div id="college-details">
                <h5 className="vertical-timeline-element-subtitle" style={{fontStyle: 'italic', color: 'grayText'}}>
                  {item.degree}
                </h5>
                <h5 className="vertical-timeline-element-subtitle" style={{color:"white"}}>
                  {item.location}
                </h5>
                <h5 className="vertical-timeline-element-subtitle" style={{color:"white"}}>
                  {item.gpa}
                </h5>

                <h5 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                  Relevant Coursework:
                </h5>
              </div>

              <ul className="role-list">
                {item.coursework.map((roleItem, roleIndex) => (
                  <li key={roleIndex}>
                    <strong>{roleItem}</strong>
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


    </div>
  );
};

export default Education;
