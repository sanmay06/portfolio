import React, { useContext, useEffect, useRef, useState } from "react";
import proj from "../porj";
import Project from "../elements/Project";

function Projects() {

    return (
        <section id="projects" >
                    <h1 className="headings">Projects</h1>
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
