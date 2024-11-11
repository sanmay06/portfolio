import React from "react";
import Loan from "../pictures/LoanManagemnet.png";
import weather from "../pictures/weather.png";
import clean from "../pictures/cleanup.jpeg";
const dict = [Loan,weather,clean]

function Project (props) {
    console.log(Loan);
    return <a className="project" href={props.url}>
            <img src ={dict[props.k - 1]} alt='project-image' />
            <h1 className="proj-name">{props.name}</h1>
            <span className="proj-desc">{props.description}</span>
        </a>
}

export default Project;