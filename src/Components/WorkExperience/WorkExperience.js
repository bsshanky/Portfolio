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
      companyname: "Navigem Data Inc.",
      image: "navigem",
      position: "Software Engineer - iOS",
      des: [
        {client: "Client - ELCITA, Bangalore:",
          role: ["Developed an iOS app from scratch to enable reporting infrastructural issues to ELCITA, a township management", 
          "Deployment of the app saw a rise in issues being reported by 55%",
          "Simultaneously assumed the responsibilities of a Data Scientist while primarily working as a Mobile Engineer."
        ]
      },
      {
        client: "Client - Lenmed Hospitals, South Africa:",
        role: ["Developed a healthcare application which enabled triggering a ’Single click SOS’ alert to nearby paramedics in case of heart attack or stroke", 
        // "Orchestrated backend design for a key project utilizing Cloud Firestore, incorporating Email/Phone Sign-In, 2FA (Email or OTP), and GeoQueries. This strategic shift to cloud-native services slashed operational costs by 50%, enhancing scalability and feature compatibility while minimizing total ownership cost.",
        "Implemented various code optimizations to efficiently utilize Pay-As-You-Go API services, effectively reducing overhead costs by 66% and enhancing system performance",
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
          role: ["Authored Unit Test suites for 1500+ lines of core functionality code, increasing test coverage by 30% and reducing post-release defects by 25%.", 
          "Optimized the development process by configuring a Jenkins CI/CD pipeline, automating testing and executable file generation, which resulted in a 30% reduction in time to market the app.",
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
