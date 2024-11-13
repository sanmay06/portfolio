import React, { useContext, useEffect, useRef, useState } from "react";
import SlideContext from "../slidecontext";
import proj from "../porj";
import Project from "../elements/Project";

function Projects() {
    const ref = useRef();
    const [vis, setVis] = useState(false);
    const { add, remove } = useContext(SlideContext);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { setVis(entry.isIntersecting)
            }, {
                root: null,
                threshold: 0.1,
            }
        );
        if (ref.current) obs.observe(ref.current);

        return () => {
            if (ref.current) obs.unobserve(ref.current);
        };
    }, []);

    useEffect(() => {
        if (vis) {
            add("projects");
        } else {
            remove("projects");
        }
    }, [vis]);

    return (
        <section id="projects" ref={ref}>
            {vis && (
                <>
                    <h1 className="headings">Projects</h1>
                    <div className="projects">
                        {proj.map((p) => (
                            <Project
                                k={p.id} 
                                name={p.name}
                                description={p.description}
                                lang={p.language}
                                url={p.url}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}

export default Projects;
