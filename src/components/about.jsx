import React, { useEffect, useState, useContext, useRef } from "react";
import SlideContext from "../slidecontext";
import { motion } from "framer-motion";
import Technology from "./technologies";

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

    return <section id="welcome-section"               
                animate = {{x:0,z:0}}   
                initial = {{x:50,z:0}} 
                transition = {{ duration:2}}
            > 
                <motion.h1 className="headings"
                   animate = {{x:0,z:0}}   
                   initial = {{x:50,z:0}} 
                   transition = {{ duration:2}} 
                >
                    About Me
                </motion.h1>  
                <motion.div className="wel-text body"
                    animate = {{x:0,z:0}}   
                    initial = {{x:50,z:0}} 
                    transition = {{ duration:2, delay:0.3}}
                >
                    Hi, I'm Sanmay Krishnapur—a developer passionate about creating software that makes a difference. With a strong foundation in Java, I build efficient and user-friendly web applications and solutions. I enjoy problem-solving and thrive on tackling challenges with clean, effective code. Always curious and eager to learn, I strive to grow with the evolving tech landscape and bring value through my work.
                </motion.div>
                <Technology />
            </section>
            ;
}
