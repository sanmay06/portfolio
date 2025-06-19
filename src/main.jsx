'use client'
import React, { useEffect } from "react";
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Lenis from "lenis";
import Background from "./components/Background";
import { ScrollTrigger } from "gsap/all";

function App() {

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smooth: true
        });
        function raf(time) {
            lenis.raf(time);
            // ScrollTrigger.update();
            requestAnimationFrame(raf);
        }   
        requestAnimationFrame(raf);
        lenis.on("scroll", ScrollTrigger.update);
    }, []);

    return (
        <section >
            <Background />
            <About />
            {/* <div style={{position: 'relative'}}> */}
                <Projects />
            {/* </div> */}
            <Contact />
        </section>
    );
}

export default App;
