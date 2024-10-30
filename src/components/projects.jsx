import React, { useContext, useEffect, useState } from "react";
import SlideContext from "../slidecontext";
import proj from "../porj";
import Project from "../elements/Project";

function Projects() {
    console.log(proj);
    const [vis, setvis] = useState("false");
    const { add, remove } = useContext(SlideContext);

    useEffect(() => {
        const ele = document.getElementById("projects");
        if(!ele) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                setvis(entry.isIntersecting)
            }, {
                root: null,
                threshold: 0.1,
            }
        );
        obs.observe(ele);

        return ()=>{ obs.unobserve(ele) }

    },[])

    useEffect(() =>{
        if(vis)
            add("projects");
        else    
            remove("projects");
    },[vis]);

    return <section id="projects">
            <h1 className="headings">Projects</h1>
            <div className="projects body">
                {proj.map((p) => {
                    return <Project name={p.name} description={p.description} lang = {p.language} url = {p.url}/>
                })}
            </div>
        </section>
}

export default Projects;