import React, { useContext, useEffect, useRef, useState } from "react";
import proj from "../porj";
import Project from "../elements/Project";
import SlideContext from "../slidecontext";

function Projects() {

    const [isVisible, setvis] = useState(false);
    const { add, remove } = useContext(SlideContext);

    useEffect( () => {
        const obs = new IntersectionObserver(([entry]) =>{setvis(entry.isIntersecting);},{threshold:0.1, root:null,})
        const ele = document.getElementById("projects");
        if(ele) 
            obs.observe(ele);

        return ( () => {
            obs.unobserve(ele);
        })
    },[])

    useEffect( () => {
        if(isVisible)
            add("projects");
        else
            remove("projects");
    },[isVisible])

    return (
        <section id="projects">
                    <h1 className="proj-head headings">Projects</h1>
                    <div className="projects">
                        {proj.map((p) => (
                            <Project
                                key={p.id}
                                k={p.id} 
                                name={p.name}
                                description={p.description}
                                lang={p.language}
                                url={p.url}
                            />
                        ))}
                    </div>
        </section>
    );
}

export default Projects;
