import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import accenture from '../../Image/accenture.png'
import navigem from '../../Image/navigem.jpeg'

import { MdWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Navigem Data",
      image: "accenture",
      position: "iOS Engineer",
      des: [
        {client: "Client - ELCITA, Bangalore:",
          role: ["Developed an iOS app from scratch to enable reporting infrastructural issues to ELCITA, a township management", 
          "Deployment of the app saw a rise in issues being reported by 55%",
        ]
      },
      {
        client: "Client - Lenmed Hospitals, South Africa:",
        role: ["Developed a healthcare application which enabled triggering a ’Single click SOS’ alert to nearby paramedics in case of heart attack or stroke", 
        "Built Uber-like map feature for patients, their emergency contacts and the hospital to monitor the movement of the paramedic",
      ]
      },
      {
        client: "Project - NavLabs:",
        role: ["Conducted 12 mobile application development workshops and organised 5 hackathons which were attended by 250+ undergraduate students from the company’s partnered colleges"
      ]
      }
      ],
      year: "Oct 2019 - May 2022",
    },

    {
      companyname: "Accenture",
      image: "accenture",
      position: "Associate Software Engineer",
      des: [
        {client: "Client - Celgene Corporation, USA:",
          role: ["Developed an application to store medical research documents locally using the CoreData framework", 
          "Implemented XCTest cases for 80% of the source code",
          "Built robust CI/CD pipeline for the application which reduced the testing and deployment time by 66%"
        ]
      },
      ],
      year: "Nov 2018 - Oct 2019",
    }
  ];

  const images = [
    navigem,
    accenture
  ]

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <p className="main-topic">Work Experience 💼:</p>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#4b81f4">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#252526", color: "#fff"}}
              contentArrowStyle={{ borderRight: "7px solid #252526" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: "#252526", color: "#fff" }}
              icon={<MdWork/>}
            >

            <div id="company">
            <img
                  src={images[index]}
                  alt={item.companyname}
                  style={{ width: "30px", height: "30px", objectFit: "cover" }}
                />
              <h3 className="vertical-timeline-element-title">
                  {item.companyname}
              </h3>     
            </div>
              


              <h5 className="vertical-timeline-element-subtitle" style={{fontStyle: 'italic', color: 'grayText'}}>
                {item.position}
              </h5>

              <br/>

              <ul className="role-list">
                {item.des.map((roleItem, roleIndex) => (
                  <li key={roleIndex}>
                    <strong>{roleItem.client}</strong>
                    <ul className="sub-role-list">
                      {roleItem.role.map((subRole, subRoleIndex) => (
                        <li key={subRoleIndex}>{subRole}</li>
                      ))}
                    </ul>
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

export default WorkExperience;
