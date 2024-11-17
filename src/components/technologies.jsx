import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";

function Technology () {
    return <section id='techno'>
        <h1 className="tech-heading headings">Technologies</h1>
        <div className="tech-cont">
            <div className="tech">
                <FaReact size={50}/>
            </div>
            <div className="tech">
                <FaHtml5 size={50}/>
            </div>
            <div className="tech">
                <FaCss3Alt size={50}/>
            </div>
            <div className="tech">
                <FaJava size={50}/>
            </div>
            <div className="tech">
                <IoLogoJavascript size={50}/>
            </div>
            <div className="tech">
                <FaBootstrap size={50}/>
            </div>
        </div>
    </section>
}

export default Technology;