import React, { useEffect, useState, useContext } from "react";
import SlideContext from "../slidecontext";


export default function About() {
    const [isVisible, setVisible] = useState(false);
    const { add, remove } = useContext(SlideContext);

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

        // Cleanup observer
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

    return <section id="welcome-section"> <h1 className="wel-head">About Me</h1>
            <div className="wel-text">I'm a passionate developer skilled in creating efficient tools and dynamic web applications. I utilize React to build responsive, user-friendly interfaces that enhance web experiences. I thrive on problem-solving and enjoy tackling real-world challenges through clean and effective code. Additionally, I have developed file cleanup tools that optimize disk space by deleting large files and removing empty directories. I'm always eager to learn and grow in the ever-evolving tech landscape.</div>
        </section>;
}
