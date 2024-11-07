import React, { useEffect, useState, useContext, useRef } from "react";
import SlideContext from "../slidecontext";
import { motion } from "framer-motion";

export default function About() {
    const [isVisible, setVisible] = useState(false);
    const { add, remove } = useContext(SlideContext);
    const ref = useRef();
    useEffect(() => {
        const ele = document.getElementById("welcome-section");
        if (!ele) return;

        const observ = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            }, {
                root: null,
                threshold: 0.1,
            }
        );
        observ.observe(ele);

        return () => {
            observ.unobserve(ele);
        };
    }, []);

    // Call add or remove based on visibility
    useEffect(() => {
        if (isVisible) {
            add("about");
        } else {
            remove("about");
        }
    }, [isVisible]);

    return <section id="welcome-section">  
                <motion.section className="welcome" 
                    animate = {{x:0,z:0}}   
                    initial = {{x:'100vw',z:0}} 
                    transition = {{ duration:1}}
                > 
                    <h1 className="headings">About Me</h1>  
                    <div className="wel-text body">I'm a passionate developer skilled in creating efficient tools and dynamic web applications. I utilize React to build responsive, user-friendly interfaces that enhance web experiences. I thrive on problem-solving and enjoy tackling real-world challenges through clean and effective code. Additionally, I have developed file cleanup tools that optimize disk space by deleting large files and removing empty directories. I'm always eager to learn and grow in the ever-evolving tech landscape.</div>
                </motion.section>
                
            </section>;
}
