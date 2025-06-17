'use client'
import React, { useEffect } from "react";
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Lenis from "lenis";
import Background from "./components/Background";

function App() {

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }   
        requestAnimationFrame(raf);
    }, []);

    return (
        <section >
            <Background />
            <About />
            <Projects />
            <Contact />
        </section>
    );
}

export default App;
