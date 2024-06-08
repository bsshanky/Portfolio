import React from "react";
import "./TechStack-Element.css";

const TechStackElement = ({skill}) => {
    return (
        <div className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
        </div>
    )
}

export default TechStackElement