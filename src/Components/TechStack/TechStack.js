import React from "react";
import "./TechStack.css";
import TechStackElement from "./TechStack-Element";


const skillsData = [
  {
    type: "Programming Languages",
    list: [
      {
        name: "Swift",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        name: "R",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        name: "Objective-C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg"
      },

    ]
  },
  {
    type: "Web Technologies",
    list: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      },
      {
        name: "jQuery",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Node JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      }

    ]
  },
  {
    type: "Database Technologies",
    list: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        name: "SQLite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
      },
      {
        name: "Microsoft SQL Server",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      }

    ]
  },
  {
    type: "Version Control Tools",
    list: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
    ]
  },
  {
    type: "Cloud Technologies",
    list: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
      },
      {
        name: "Google Cloud",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
      },
      {
        name: "Azure (Fundamentals)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
      }

    ]
  },
  {
    type: "Code Editors and IDEs",
    list: [
      {
        name: "Xcode",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"
      },
      {
        name: "Jupyter Notebook",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"
      },
      {
        name: "Intelli J",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      }

    ]
  },
  {
    type: "Data Science Libraries",
    list: [
      {
        name: "numpy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
      },
      {
        name: "pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
      },
      {
        name: "pyTorch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
      },
      {
        name: "Tensor Flow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
      }

    ]
  },
  {
    type: "Design Tools",
    list: [
      {
        name: "Adobe Xd",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
      },
      ,
      {
        name: "Canva",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
      }
    ]
  }
]

const TechStack = () => {
  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <p className="main-topic">Technical Skills 🛠️:</p>
      </div>

      <div className="skills-container">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Specifics</th>
            </tr>
          </thead>
          <tbody>
            {skillsData.map((category, index) => (
              <tr key={index}>
                <td>{category.type}</td>
                <td>
                  {category.list.map((skill, skillIndex) => (
                    <TechStackElement skill={skill} key={skillIndex} />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechStack;