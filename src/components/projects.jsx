import React, { useContext, useEffect, useState } from "react";
import proj from "../porj";
import SlideContext from "../slidecontext";
import Loan from "../pictures/LoanManagemnet.png";
import weather from "../pictures/weather.png";
import clean from "../pictures/cleanup.jpeg";
import { animate, motion } from "framer-motion";

const dict = [Loan, weather, clean];

function Projects() {

    const variant = {
        hidden: {
            scale: 1.2,
            y:20
        },
        animate: {
            scale:1,
            y:0,
        }
    }

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
                            <motion.a
                            className="project"
                            href={p.url}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity : 1 }}
                            transition={{duration: 1}}
                        >
                            <motion.h1 className="proj-name"
                                variants={variant}    
                                whileInView='animate'
                                initial="hidden"
                                transition={{duration: 1, delay:0.5}}
                            >{p.name}</motion.h1>
                                <motion.div className='project-cont'
                                    variants={variant}    
                                    whileInView="animate"
                                    initial="hidden"
                                    transition={{duration: 1, delay:0.5}}
                                > 
                                    <img src={dict[p.id - 1]} alt={`${p.name} project`} />
                                    <div className="proj-desc">{p.description}</div>
                                </motion.div>
                        </motion.a>
                        ))}
                    </div>
        </section>
    );
}

export default Projects;
