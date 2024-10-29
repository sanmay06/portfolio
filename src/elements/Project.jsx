import React from "react";
import Loan from "../pictures/LoanManagemnet.png";
import weather from "../pictures/weather.png";


function Project (props) {
    console.log(Loan);
    return <div className="project">
            <img src ={Loan} alt='project image' />
            <h1 className="proj-name">{props.name}</h1>
            <span className="proj-desc">{props.description}</span>
        </div>
}

export default Project;