import React, { useContext, useEffect, useState } from "react";
import SlideContext from "./slidecontext";

function Navbar() {
    const [abhov, setab] = useState(false);
    const [pjhov, setpj] = useState(false);
    const [cthov, setct] = useState(false);

    const {curslide} = useContext(SlideContext);
    useEffect(() => {
        if(curslide.includes("about"))
            setab(true);
        else
            setab(false);

        if(curslide.includes("projects"))
            setpj(true);
        else
            setpj(false);

        if(curslide.includes("contact"))
            setct(true);
        else
            setct(false);
    },[curslide])
    
    return <div className="nav">
            <nav>
                <ul className="nav-bar">
                    <li><a className = {abhov?"hovered":""} href="#welcome-section">About</a></li>
                    <li><a className = {pjhov?"hovered":""}  href="#projects">Projects</a></li>
                    <li><a className = {cthov?"hovered":""}  href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
}

export default Navbar;